import type { ProjectSubmission } from "./types";
export type ValidationResult = { valid: true; errors: Record<string, never> } | { valid: false; errors: Partial<Record<keyof ProjectSubmission, string>> };
const urlPattern = /^https?:\/\/.+/i;
export function validateProjectSubmission(values: ProjectSubmission): ValidationResult {
  const errors: Partial<Record<keyof ProjectSubmission, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Use at least 2 characters.";
  if (values.author.trim().length < 2) errors.author = "Tell us who made it.";
  if (values.description.trim().length < 20) errors.description = "Add at least 20 characters.";
  if (!urlPattern.test(values.url.trim())) errors.url = "Use a full URL beginning with http:// or https://.";
  if (!values.category) errors.category = "Choose a category.";
  return Object.keys(errors).length === 0 ? { valid: true, errors: {} } : { valid: false, errors };
}
