#!/usr/bin/env node
import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  AWS_SES_FROM_EMAIL: string;
  AWS_SES_TO_EMAIL: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const awsRegions = [
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-central-1',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'eu-north-1',
];

console.log('Prebuild: Validating environment variables...');

const errors: string[] = [];

function validate(
  name: keyof EnvConfig,
  validator?: (value: string) => boolean,
  hint?: string
) {
  const value = process.env[name];
  if (!value || value.trim() === '') {
    errors.push(`Environment variable ${name} is missing or empty.`);
    return;
  }

  if (validator && !validator(value)) {
    errors.push(
      `Environment variable ${name} is invalid. ${hint || `Hint: ${hint}`}`
    );
  }
}

validate('AWS_ACCESS_KEY_ID');
validate('AWS_SECRET_ACCESS_KEY');
validate(
  'AWS_REGION',
  (val) => awsRegions.includes(val),
  `Must be one of: ${awsRegions.join(', ')}`
);
validate(
  'AWS_SES_FROM_EMAIL',
  (val) => emailRegex.test(val),
  'Must be a valid email address.'
);
validate(
  'AWS_SES_TO_EMAIL',
  (val) => emailRegex.test(val),
  'Must be a valid email address.'
);

if (errors.length > 0) {
  console.error('Prebuild: Environment variable validation failed:');
  errors.forEach((error) => console.error(` - ${error}`));
  process.exit(1);
}

console.log('Prebuild: Environment variable validation succeeded.');
