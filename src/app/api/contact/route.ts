import { sendEmail } from '@/lib/email/aws-ses';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response('Missing required fields.', { status: 400 });
  }

  try {
    await sendEmail({ name, email, message });
    return new Response('Email sent successfully.', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email.', { status: 500 });
  }
}
