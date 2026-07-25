// TextField.tsx — free-text form input primitives (TextField / TextAreaField)
// for the tools suite. Spec: site-builder/specs/tools-suite.md → "ToolField (form
// primitives)" section describes NumberField/SelectField/ToggleField/RadioGroupField
// only — those 4 are all numeric/choice inputs. Tools 13-16 (QR content, WhatsApp
// phone/message, meta title/description, domain keywords) need a genuine
// free-text string input, which ToolField.tsx does not provide (NumberField
// runs every keystroke through parseTRNumberInput, which would mangle a phone
// number's leading zero or turn "example.com" into 0). This file adds that
// missing primitive rather than bending NumberField to a job it was not built for.
//
// Deliberate duplication note: ToolField.tsx's <FieldChrome> (the shared
// label/unit/helper/error wrapper) is a private, non-exported function in that
// file, so this file re-implements the same visual/a11y chrome locally instead
// of importing it (same precedent as wixsupport.com.tr's install). The class
// strings below are kept byte-for-byte identical to ToolField.tsx's so the two
// primitives look and behave identically to the end user.
//
// Every field: a real <label htmlFor="..."> bound to the input's id, full
// keyboard operability, and a minimum 44x44px touch target
// (site-builder/specs/responsive-system.md). border-radius is ALWAYS 1px (owner
// rule, 2026-07-23) — this file never uses rounded-md/lg/xl/full, only the fixed
// `rounded-[1px]` utility.

'use client';

import { useId } from 'react';

// ── Shared chrome (label + helper/error + optional char counter) ───────────

interface FieldChromeProps {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  charCount?: { current: number; max: number };
  children: React.ReactNode;
}

function FieldChrome({ id, label, error, helperText, required, charCount, children }: FieldChromeProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-4 flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        {charCount && (
          <span className="text-xs text-muted-foreground" aria-hidden="true">
            {charCount.current}/{charCount.max}
          </span>
        )}
      </div>
      {children}
      {helperText && !error && (
        <p id={helperId} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-error-700">
          {error}
        </p>
      )}
    </div>
  );
}

// Kept identical to ToolField.tsx's `inputClasses` — see the duplication note above.
const inputClasses =
  'min-h-11 w-full rounded-[1px] border border-border bg-background px-3 text-base text-foreground ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

// ── TextField (single-line) ─────────────────────────────────────────────

export interface TextFieldProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'url' | 'tel';
  placeholder?: string;
  maxLength?: number;
  /** Renders a live "current/max" counter next to the label when true and `maxLength` is set. */
  showCharCount?: boolean;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}

export function TextField({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  maxLength,
  showCharCount,
  error,
  helperText,
  required,
  disabled,
  autoComplete,
}: TextFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? `${name}-${generatedId}`;

  return (
    <FieldChrome
      id={fieldId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
      charCount={showCharCount && maxLength ? { current: value.length, max: maxLength } : undefined}
    >
      <input
        id={fieldId}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
        className={inputClasses}
      />
    </FieldChrome>
  );
}

// ── TextAreaField (multi-line) ──────────────────────────────────────────

export interface TextAreaFieldProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  showCharCount?: boolean;
  rows?: number;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

export function TextAreaField({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  showCharCount,
  rows = 3,
  error,
  helperText,
  required,
  disabled,
}: TextAreaFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? `${name}-${generatedId}`;

  return (
    <FieldChrome
      id={fieldId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
      charCount={showCharCount && maxLength ? { current: value.length, max: maxLength } : undefined}
    >
      <textarea
        id={fieldId}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
        className={`${inputClasses} min-h-24 resize-y py-2`}
      />
    </FieldChrome>
  );
}
