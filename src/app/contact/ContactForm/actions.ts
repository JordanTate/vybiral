'use server';
import { sendEmail } from '@/lib/email/aws-ses';
import { z } from 'zod';
import { HandleSubmitOutput } from './types';

const contactSchema = z.object({
  name: z
    .string()
    .min(6, 'Name must be at least 6 characters long')
    .max(64, 'Name must be at most 64 characters long'),
  email: z.email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message must be at most 1000 characters long'),
  website: z.string().max(0, 'Website must be empty').optional(),
});

export async function handleSubmit(
  _: HandleSubmitOutput,
  formData: FormData
): Promise<HandleSubmitOutput> {
  const formValues = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    website: formData.get('website') as string,
  };

  const { success, error, data } = contactSchema.safeParse(formValues);

  if (!success) {
    return {
      errors: z.treeifyError(error),
      values: formValues,
    };
  }

  try {
    await sendEmail(data);
  } catch (error) {
    return {
      errors: {
        errors: ['Failed to send email. Please try again later.'],
      },
      values: formValues,
    };
  }

  return {
    success: true,
  };
}
