import { describe, expect, it } from "vitest";
import { getAuthErrorMessage } from "./auth-errors";

describe("getAuthErrorMessage", () => {
  it("maps known error codes to friendly messages", () => {
    expect(getAuthErrorMessage({ code: "INVALID_EMAIL_OR_PASSWORD" })).toBe(
      "Invalid email or password.",
    );
    expect(
      getAuthErrorMessage({ code: "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL" }),
    ).toBe("An account with this email already exists.");
  });

  it("falls back to the raw message for unknown codes", () => {
    expect(
      getAuthErrorMessage({ code: "SOMETHING_NEW", message: "raw message" }),
    ).toBe("raw message");
  });

  it("falls back to a generic message when nothing is available", () => {
    expect(getAuthErrorMessage({})).toBe(
      "Something went wrong. Please try again.",
    );
    expect(getAuthErrorMessage({ message: undefined })).toBe(
      "Something went wrong. Please try again.",
    );
  });
});
