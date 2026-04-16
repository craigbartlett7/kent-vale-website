import EnquiryForm from '@/app/components/EnquiryForm';

export const metadata = {
  title: 'Contact | Kent & Vale',
  description: 'Get in touch with Kent & Vale. Ask a question, explore a commission idea, or just say hello.',
};

export default function Contact() {
  return (
    <EnquiryForm
      title="Get in Touch"
      subtitle="A question, a commission idea, or just a hello — we'd love to hear from you."
    />
  );
}
