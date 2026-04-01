// app/api/admin/auth/route.js
// Admin authentication endpoint

import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In production, you would:
// 1. Hash the password and store in environment variables
// 2. Use proper JWT libraries
// 3. Set secure httpOnly cookies

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change-me-in-production';

export async function POST(req) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: 'Password required' },
        { status: 400 }
      );
    }

    // Simple password check (in production, use bcrypt or similar)
    if (password !== ADMIN_PASSWORD) {
      // Log failed attempt
      console.warn('Failed admin login attempt');
      
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Generate simple JWT token (in production, use proper JWT library)
    const token = crypto.randomBytes(32).toString('hex');
    
    // In production, this would:
    // - Be stored in Supabase or Redis with expiration
    // - Have proper JWT signature
    // - Be validated on each admin request

    return NextResponse.json(
      { 
        success: true,
        token: token,
        message: 'Authentication successful'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
