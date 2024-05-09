'use client';

import React, { useState } from 'react';
import Button from '../../button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { useReCaptcha } from "next-recaptcha-v3";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();
  const { executeRecaptcha } = useReCaptcha();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = await executeRecaptcha("form_submit");

    const payload = {
      ...data,
      token
    };

    const resp = await fetch('/api/send', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    return resp.json(); // parses JSON response into native JavaScript objects
  }
  
  return (
    <div className="bg-white w-full flex flex-col items-center relative my-10">
      <div className="max-w-screen-xl w-full flex flex-col items-start justify-start px-4">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-blueMain mb-5">
              Send us a message
            </h3>
            {isSubmitSuccessful && (
              <h4 className="text-2xl font-medium text-orange mb-5">
                Thank you for your message our sales person will contact with
                you shortly!
              </h4>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your name*"
                  disabled={isSubmitting || isSubmitSuccessful}
                  {...register('name', { required: 'Field is required' })}
                />
                {errors.name && (
                  <span className="text-xs text-orange">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="mt-10">
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email*"
                  disabled={isSubmitting || isSubmitSuccessful}
                  {...register('email', {
                    required: 'Field is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter correct e-mail address',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-orange">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="mt-10">
                <textarea
                  id="message"
                  rows={4}
                  autoComplete="message"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your message*..."
                  {...register('message', { required: 'Field is required' })}
                  disabled={isSubmitting || isSubmitSuccessful}
                />
                {errors.message && (
                  <span className="text-xs text-orange">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <div className="mt-10">
                <Button className="w-full" loading={isSubmitting} disabled={isSubmitSuccessful}>
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
