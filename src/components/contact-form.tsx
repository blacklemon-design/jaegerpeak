"use client";

import type React from "react";

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

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const [emailStatus, setEmailStatus] = useState<EmailStatus>(EmailStatus.Idle);

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setEmailStatus(EmailStatus.Pending);
    const success = await sendEmail(data);
    if (success) {
      setEmailStatus(EmailStatus.Success);
    } else {
      setEmailStatus(EmailStatus.Error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-card p-6 rounded-lg border border-border"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            {...register("name", { required: true })}
            placeholder="Max Mustermann"
            required
            className="bg-background"
          />
        </div>

        <div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="deine@email.com"
              required
              className="bg-background"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Wie können wir dir helfen?
          </label>
          <Textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Hast du eine Tattoo-Idee? Lass hören!"
            rows={5}
            required
            className="bg-background"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Absenden
      </Button>
      {emailStatus == EmailStatus.Pending ? (
        <div className="flex flex-row justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />

        </div>
      ) : emailStatus == EmailStatus.Success ? (
        <p className="text-green-500">Email wurde erfolgreich gesendet</p>
      ) : emailStatus == EmailStatus.Error ? (
        <p className="text-red-500">Es ist ein Fehler aufgetreten</p>
      ) : (
        <></>
      )}
    </form>
  );
}
