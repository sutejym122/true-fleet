"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextAreaField, TextField } from "@/components/forms/Field";
import { DeliveryFallback, SuccessPanel } from "@/components/forms/FormStatus";
import { validateContact, type ContactEnquiry, type FieldErrors } from "@/lib/validation";

const empty: ContactEnquiry = { name: "", phone: "", email: "", company: "", message: "" };

type Status = "idle" | "submitting" | "success" | "failed";

export function ContactForm() {
  const [values, setValues] = useState<ContactEnquiry>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failureMessage, setFailureMessage] = useState("");

  function update(field: keyof ContactEnquiry, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit() {
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        setValues(empty);
        return;
      }

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        errors?: FieldErrors;
      };

      if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }

      setFailureMessage(data.message ?? "We could not send your message just now.");
      setStatus("failed");
    } catch {
      setFailureMessage("We could not reach the server. Check your connection and try again.");
      setStatus("failed");
    }
  }

  if (status === "success") {
    return (
      <SuccessPanel
        title="Message received"
        body="Thanks for writing to us. Someone from the TrueFleet team will get back to you."
      />
    );
  }

  return (
    <div className="space-y-5">
      {status === "failed" ? <DeliveryFallback message={failureMessage} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(event) => update("name", event.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="email"
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(event) => update("email", event.target.value)}
        />
        <TextField
          id="company"
          label="Company"
          optional
          autoComplete="organization"
          value={values.company}
          error={errors.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <TextAreaField
        id="message"
        label="How can we help?"
        value={values.message}
        error={errors.message}
        onChange={(event) => update("message", event.target.value)}
      />

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          size="lg"
          onClick={handleSubmit}
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-faint sm:max-w-xs sm:text-right">
          We use your details only to reply to this enquiry.
        </p>
      </div>
    </div>
  );
}
