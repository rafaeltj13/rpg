import { defineStore } from "pinia";

type SessionStore = {
  accessToken: string | null;
  authId: string | null;
  email: string | null;
};

const SESSION_DEFAULT_STORE: SessionStore = {
  accessToken: null,
  authId: null,
  email: null,
};

export const useSessionStore = defineStore("session", () => {
  const accessToken = ref(SESSION_DEFAULT_STORE.accessToken);
  const authId = ref(SESSION_DEFAULT_STORE.authId);
  const email = ref(SESSION_DEFAULT_STORE.email);

  function setSession({
    token,
    sessionId,
    sessionEmail,
  }: {
    token: string | null;
    sessionId: string | null;
    sessionEmail: string | null;
  }) {
    accessToken.value = token;
    authId.value = sessionId;
    email.value = sessionEmail;
  }

  return { accessToken, email, setSession };
});
