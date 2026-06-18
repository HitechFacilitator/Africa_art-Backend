/**
 * Strip entity prefixes (art-, usr-, cat-, etc.) and return the numeric ID.
 * Example: "art-2" → 2, "usr-3" → 3, "42" → 42
 */
export function parseNumericId(value: string | string[] | undefined): number {
  if (value === undefined || value === null) return NaN;
  const str = Array.isArray(value) ? value[0] : String(value);
  const stripped = str.trim().replace(/^[a-z]+-/i, "");
  return Number(stripped);
}
