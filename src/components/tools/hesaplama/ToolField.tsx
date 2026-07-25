// ToolField.tsx — form input primitives for the tools suite
// (NumberField / SelectField / ToggleField / RadioGroupField).
// Spec: site-builder/specs/tools-suite.md → "ToolField (form primitives)"
//
// Every field: a real <label htmlFor="..."> bound to the input's id (never a
// placeholder-only or aria-label-only input), an optional `unit` suffix
// (e.g. ₺ / % / cm), an optional `error`/`helperText` slot, full keyboard
// operability, and a minimum 44x44px touch target
// (site-builder/specs/responsive-system.md KURAL 6).
//
// border-radius is ALWAYS 1px (owner rule, 2026-07-23) — this file never uses
// rounded-md/lg/xl/full, only the fixed `rounded-[1px]` utility.

'use client';

import { useId, useState } from 'react';
import { parseTRNumberInput } from './format';

function clamp(value: number, min?: number, max?: number): number {
  let result = value;
  if (min !== undefined) result = Math.max(result, min);
  if (max !== undefined) result = Math.min(result, max);
  return result;
}

// ── Shared chrome (label + unit suffix + helper/error) ─────────────────────

// The optional props are written as `?: T | undefined` rather than plain `?: T`
// because this project has exactOptionalPropertyTypes enabled: under that flag a
// caller forwarding an already-optional value (unit={unit} where unit is
// `string | undefined`) is NOT assignable to a plain `unit?: string`.
interface FieldChromeProps {
  id: string;
  label: string;
  unit?: string | undefined;
  error?: string | undefined;
  helperText?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}

function FieldChrome({ id, label, unit, error, helperText, required, children }: FieldChromeProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-4 flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <div className="flex items-stretch gap-2">
        <div className="flex-1">{children}</div>
        {unit && (
          <span
            aria-hidden="true"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-[1px] border border-border px-3 text-sm text-muted-foreground"
          >
            {unit}
          </span>
        )}
      </div>
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

const inputClasses =
  'min-h-11 w-full rounded-[1px] border border-border bg-background px-3 text-base text-foreground ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

// ── NumberField ──────────────────────────────────────────────────────────

interface NumberFieldProps {
  id?: string;
  name: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string | undefined;
  min?: number;
  max?: number;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * Rendered as type="text" inputMode="decimal", NOT type="number" — native
 * number inputs force a "." decimal separator regardless of page locale,
 * which breaks tr-TR comma-decimal input (site-builder/specs/tools-suite.md
 * "Number Formatting & Locale"). `parseTRNumberInput` does the tr-TR parsing.
 *
 * Keeps its own local text buffer (`raw`) so the user can freely type a
 * partial/comma value ("12," / "1.234,5") without the controlled value being
 * rewritten mid-keystroke; the buffer only resyncs from `value` when it was
 * changed from OUTSIDE this input (e.g. URL state restored on mount).
 *
 * Resync happens during render ("adjusting state when a prop changes" —
 * https://react.dev/learn/you-might-not-need-an-effect), NOT inside a
 * useEffect. Tracking `lastValue` distinguishes "value changed from outside"
 * from "still the same external value" without an effect.
 */
export function NumberField({
  id,
  name,
  label,
  value,
  onChange,
  unit,
  min,
  max,
  placeholder,
  error,
  helperText,
  required,
  disabled,
}: NumberFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? `${name}-${generatedId}`;
  const [raw, setRaw] = useState(() => String(value));
  const [lastValue, setLastValue] = useState(value);

  if (lastValue !== value) {
    setLastValue(value);
    if (parseTRNumberInput(raw) !== value) {
      setRaw(String(value));
    }
  }

  return (
    <FieldChrome id={fieldId} label={label} unit={unit} error={error} helperText={helperText} required={required}>
      <input
        id={fieldId}
        name={name}
        type="text"
        inputMode="decimal"
        value={raw}
        disabled={disabled}
        onChange={(e) => {
          const nextRaw = e.target.value;
          setRaw(nextRaw);
          onChange(clamp(parseTRNumberInput(nextRaw), min, max));
        }}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
        className={inputClasses}
      />
    </FieldChrome>
  );
}

// ── SelectField ──────────────────────────────────────────────────────────

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  unit?: string | undefined;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  options,
  unit,
  error,
  helperText,
  required,
}: SelectFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? `${name}-${generatedId}`;

  return (
    <FieldChrome id={fieldId} label={label} unit={unit} error={error} helperText={helperText} required={required}>
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
        className={inputClasses}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldChrome>
  );
}

// ── ToggleField (boolean) ────────────────────────────────────────────────

interface ToggleFieldProps {
  id?: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  helperText?: string;
  error?: string;
}

export function ToggleField({ id, name, label, checked, onChange, helperText, error }: ToggleFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? `${name}-${generatedId}`;
  const helperId = helperText ? `${fieldId}-helper` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="mb-4 flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        {/* Native checkbox at a 44x44 hit target via sizing, not a hidden input +
            custom graphic substitute — keeps default OS a11y semantics intact. */}
        <input
          id={fieldId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className="h-11 w-11 shrink-0 cursor-pointer rounded-[1px] border border-border accent-primary-500"
        />
        <label htmlFor={fieldId} className="cursor-pointer text-sm font-medium text-foreground">
          {label}
        </label>
      </div>
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

// ── RadioGroupField ──────────────────────────────────────────────────────

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  helperText?: string;
  error?: string;
  required?: boolean;
}

export function RadioGroupField({
  name,
  label,
  value,
  onChange,
  options,
  helperText,
  error,
  required,
}: RadioGroupFieldProps) {
  const generatedId = useId();
  const groupId = `${name}-${generatedId}`;
  const helperId = helperText ? `${groupId}-helper` : undefined;
  const errorId = error ? `${groupId}-error` : undefined;

  return (
    <fieldset
      className="mb-4 flex flex-col gap-1.5 border-0 p-0"
      aria-describedby={error ? errorId : helperText ? helperId : undefined}
    >
      <legend className="text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const optionId = `${groupId}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={optionId}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-[1px] border border-border px-3"
            >
              <input
                id={optionId}
                type="radio"
                name={groupId}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="h-5 w-5 accent-primary-500"
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          );
        })}
      </div>
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
    </fieldset>
  );
}
