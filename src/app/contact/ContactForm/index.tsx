'use client';
import { useActionState } from 'react';
import { handleSubmit } from '../ContactForm/actions';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { User, Mail, Send, CircleCheck } from 'lucide-react';
import styles from './index.module.scss';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(handleSubmit, null);

  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          {state?.success && (
            <div className={'text-center'}>
              <CircleCheck size={48} className='text-green-500 mx-auto mb-4' />
              <h2 className='text-2xl font-semibold text-center mb-2'>
                Thank you for reaching out!
              </h2>
              <p className='text-center text-gray-600'>
                Your message has been successfully sent. I will get back to you
                as soon as possible.
              </p>
            </div>
          )}
          {!state?.success && (
            <form action={formAction} className={styles.form}>
              <FieldSet>
                <FieldLegend>Get in Touch</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor='name'>Name</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        type='text'
                        id='name'
                        name='name'
                        required
                        disabled={pending}
                        defaultValue={state?.values?.name || ''}
                      />
                      <InputGroupAddon>
                        <User size={16} />
                      </InputGroupAddon>
                    </InputGroup>
                    {state?.errors?.properties?.name?.errors && (
                      <FieldDescription className='text-red-500'>
                        {state.errors.properties.name.errors.join(' ')}
                      </FieldDescription>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        type='email'
                        id='email'
                        name='email'
                        required
                        disabled={pending}
                        defaultValue={state?.values?.email || ''}
                      />
                      <InputGroupAddon>
                        <Mail size={16} />
                      </InputGroupAddon>
                    </InputGroup>
                    {state?.errors?.properties?.email?.errors && (
                      <FieldDescription className='text-red-500'>
                        {state.errors.properties.email.errors.join(' ')}
                      </FieldDescription>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='message'>Message</FieldLabel>
                    <Textarea
                      id='message'
                      name='message'
                      required
                      disabled={pending}
                      defaultValue={state?.values?.message || ''}
                    />
                    {state?.errors?.properties?.message?.errors && (
                      <FieldDescription className='text-red-500'>
                        {state.errors.properties.message.errors.join(' ')}
                      </FieldDescription>
                    )}
                  </Field>
                  {state?.errors?.errors && (
                    <FieldDescription className='text-red-500'>
                      {state.errors.errors.join(' ')}
                    </FieldDescription>
                  )}
                  <Field>
                    <Button type='submit' size={'lg'} disabled={pending}>
                      <Send />
                      {pending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>
          )}
        </CardContent>
      </Card>
    </>
  );
}
