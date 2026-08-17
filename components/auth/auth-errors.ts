const ERROR_MESSAGES: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: "Invalid email or password.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "An account with this email already exists.",
  EMAIL_NOT_VERIFIED: "Please verify your email address first.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_PASSWORD: "Invalid password.",
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters.",
  PASSWORD_TOO_LONG: "Password is too long.",
  SOCIAL_ACCOUNT_ALREADY_LINKED:
    "This account is already linked to another provider.",
};

/** Returns a friendly message for a better-auth client error. */
export function getAuthErrorMessage(error: {
  code?: string;
  message?: string;
}): string {
  if (error.code && ERROR_MESSAGES[error.code]) {
    return ERROR_MESSAGES[error.code];
  }
  return error.message ?? "Something went wrong. Please try again.";
}
