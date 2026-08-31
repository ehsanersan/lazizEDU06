const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Convert any latin digits in a string/number to Persian numerals. */
export function toFa(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}

/** Zero-padded Persian slide number, e.g. ۰۳ */
export function faPad(n: number): string {
  return toFa(String(n).padStart(2, "0"));
}
