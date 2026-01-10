import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import type {
  SESClientConfig,
  SendEmailCommandInput,
} from '@aws-sdk/client-ses';
import { SendEmailParams } from './types';

const config: SESClientConfig = {
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
};

const sesClient = new SESClient(config);

async function sendEmail(parameters: SendEmailParams) {
  const input: SendEmailCommandInput = {
    Source: process.env.AWS_SES_FROM_EMAIL || '',
    Destination: {
      ToAddresses: [process.env.AWS_SES_TO_EMAIL || ''],
      BccAddresses: [
        process.env.NODE_ENV === 'development'
          ? ''
          : process.env.AWS_SES_BCC_EMAIL || '',
      ].filter(Boolean),
    },
    Message: {
      Subject: {
        Data: `[Contact Form] New Message from ${parameters.name}`,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: `Name: ${parameters.name}\nEmail: ${parameters.email}\n\nMessage:\n${parameters.message}`,
          Charset: 'UTF-8',
        },
      },
    },
  };
  return await sesClient.send(new SendEmailCommand(input));
}

export { sendEmail };
