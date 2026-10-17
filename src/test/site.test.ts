import { describe, it, expect } from "vitest";
import { siteOrigin, safeExternalUrl } from "../lib/site";

describe("site URL safety", () => {
  it("omits metadata for unknown or invalid origins", () => {
    for (const value of [
      undefined,
      "",
      "http://localhost:3000",
      "https://example.com/path",
      "https://user:pass@example.com",
      "javascript:alert(1)",
    ])
      expect(siteOrigin(value)).toBeNull();
    expect(siteOrigin("https://portfolio.example/")).toBe("https://portfolio.example");
    expect(safeExternalUrl("javascript:alert(1)")).toBeNull();
  });
});
