// contentGuard.ts — placeholder-visibility guard for tools-suite content slots.
//
// NOT part of the upstream site-builder/templates/tools/_shared/ contract —
// added during this site's instantiation pass (same precedent as
// wixsupport.com.tr's install) because content.ts still ships with unfilled
// `{{PLACEHOLDER}}` slots (the /write pipeline fills these later, Rule #58).
// An unfilled slot must never render as literal "{{...}}" text to a visitor —
// every tool page.tsx below runs its content.ts exports through these guards
// before handing them to <ToolShell>, so an unfilled slot renders as an empty/
// omitted section instead of raw braces. Delete this file (and its call sites)
// once every content.ts file has been filled by the /write pipeline.

/** True while `value` still contains an unfilled `{{...}}` template slot. */
export function isPlaceholder(value: string): boolean {
  return value.includes('{{') && value.includes('}}');
}

/** Empty string when still a placeholder — ToolShell renders nothing for an empty answerBlock. */
export function guardText(value: string): string {
  return isPlaceholder(value) ? '' : value;
}

/** `undefined` (omits the whole DefinitionBox) while either field is still a placeholder. */
export function guardDefinitionBox(
  box: { term: string; definition: string } | undefined,
): { term: string; definition: string } | undefined {
  if (!box) return undefined;
  return isPlaceholder(box.term) || isPlaceholder(box.definition) ? undefined : box;
}

/** Drops the whole array when its rows are still placeholders (checks the first row only — content.ts ships all rows as placeholders together, never partially filled). */
export function guardRows<T extends { label: string; value: string }>(rows: T[]): T[] {
  const first = rows[0];
  if (!first) return rows;
  return isPlaceholder(first.label) || isPlaceholder(first.value) ? [] : rows;
}

/** Drops the whole array when its items are still placeholders (same "all or nothing" reasoning as guardRows). */
export function guardFaqItems<T extends { question: string; answer: string }>(items: T[]): T[] {
  const first = items[0];
  if (!first) return items;
  return isPlaceholder(first.question) || isPlaceholder(first.answer) ? [] : items;
}
