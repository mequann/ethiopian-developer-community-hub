import { describe, expect, it } from "vitest";
import { validateProjectSubmission } from "../lib/validation";
describe("validateProjectSubmission", () => {
  it("accepts a complete project submission", () => { const result = validateProjectSubmission({ name: "Fidell", author: "Saron", description: "An open source Amharic keyboard for modern web apps.", url: "https://example.com", category: "Open source" }); expect(result.valid).toBe(true); });
  it("returns field-level feedback for invalid input", () => { const result = validateProjectSubmission({ name: "", author: "", description: "short", url: "example.com", category: "" }); expect(result.valid).toBe(false); if (!result.valid) { expect(result.errors.name).toBeDefined(); expect(result.errors.url).toBeDefined(); expect(result.errors.description).toBeDefined(); } });
});
