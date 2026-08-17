import { createAuthClient } from "better-auth/react";

// The client lives in the browser, so the API base URL is inferred from the
// current origin (the app and /api/auth are served from the same host).
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = authClient;
