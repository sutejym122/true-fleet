import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const controlBase =
  "w-full rounded-xl border bg-canvas px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint transition-colors duration-200 focus:outline-none focus-visible:border-navy";

function Wrapper({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-graphite">
        {label}
        {optional ? <span className="ml-1.5 text-xs text-faint">Optional</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-signal-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  id,
  label,
  error,
  optional,
  className,
  ...rest
}: { id: string; label: string; error?: string; optional?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper id={id} label={label} error={error} optional={optional}>
      <input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlBase, error ? "border-signal" : "border-line-strong", className)}
        {...rest}
      />
    </Wrapper>
  );
}

export function SelectField({
  id,
  label,
  error,
  options,
  placeholder,
  className,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  options: string[];
  placeholder: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <select
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlBase, error ? "border-signal" : "border-line-strong", className)}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export function TextAreaField({
  id,
  label,
  error,
  className,
  ...rest
}: { id: string; label: string; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <textarea
        id={id}
        name={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          controlBase,
          "resize-y",
          error ? "border-signal" : "border-line-strong",
          className,
        )}
        {...rest}
      />
    </Wrapper>
  );
}
