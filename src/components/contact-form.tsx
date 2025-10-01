"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

enum EmailStatus {
  Idle,
  Pending,
  Success,
  Error,
}

type Labels = {
  name: string;
  nameplaceholder: string;
  email: string;
  emailplaceholder: string;
  message: string;
  messageplaceholder: string;
  send: string;
  success: string;
  error: string;
};

export default function ContactForm({ labels }: { labels: Labels }) {
  const { register, handleSubmit } = useForm<FormData>();
  const [emailStatus, setEmailStatus] = useState<EmailStatus>(EmailStatus.Idle);

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setEmailStatus(EmailStatus.Pending);
    const success = await sendEmail(data);
    setEmailStatus(success ? EmailStatus.Success : EmailStatus.Error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {labels.name}
          </label>
          <Input
            id="name"
            {...register("name", { required: true })}
            placeholder={labels.nameplaceholder}
            required
            className="bg-background"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {labels.email}
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder={labels.emailplaceholder}
            required
            className="bg-background"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            {labels.message}
          </label>
          <Textarea
            id="message"
            {...register("message", { required: true })}
            placeholder={labels.messageplaceholder}
            rows={5}
            required
            className="bg-background"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-8"
      >
        {labels.send}
      </Button>

      {emailStatus === EmailStatus.Pending ? (
        <div className="flex flex-row justify-center mt-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : emailStatus === EmailStatus.Success ? (
        <p className="text-green-500 mt-2">{labels.success}</p>
      ) : emailStatus === EmailStatus.Error ? (
        <p className="text-red-500 mt-2">{labels.error}</p>
      ) : null}
    </form>
  );
}
