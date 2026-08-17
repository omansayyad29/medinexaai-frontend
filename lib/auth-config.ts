/** Google OAuth is only enabled when both env vars are present. */
export const isGoogleEnabled =
  Boolean(process.env.GOOGLE_CLIENT_ID) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET);
