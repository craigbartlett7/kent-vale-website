import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('orders')
    .select('order_number, customer_name, finish_time, race_year, status')
    .eq('stripe_session_id', sessionId)
    .single();

  if (error || !data) {
    // Order may not have been written by webhook yet — caller should retry
    return NextResponse.json({ found: false }, { status: 202 });
  }

  return NextResponse.json({
    found: true,
    orderNumber: `KV-${data.order_number}`,
    customerName: data.customer_name,
    finishTime: data.finish_time,
    raceYear: data.race_year,
  });
}
