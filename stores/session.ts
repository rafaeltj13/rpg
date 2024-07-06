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
  const accessTokenRef = ref(SESSION_DEFAULT_STORE.accessToken);
  const authIdRef = ref(SESSION_DEFAULT_STORE.authId);
  const emailRef = ref(SESSION_DEFAULT_STORE.email);

  const token = computed(() => accessTokenRef.value);
  const authId = computed(() => authIdRef.value);
  const email = computed(() => emailRef.value);

  function setSession({
    token,
    sessionId,
    sessionEmail,
  }: {
    token: string | null;
    sessionId: string | null;
    sessionEmail: string | null;
  }) {
    accessTokenRef.value = token;
    authIdRef.value = sessionId;
    emailRef.value = sessionEmail;
  }

  return { token, authId, email, setSession };
});
