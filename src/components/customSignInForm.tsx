// components/CustomSignInForm.tsx
"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CustomSignInForm() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const res = await signIn.create({ identifier: email, password });
      if (res.status === "complete" && res.createdSessionId) {
        await setActive({ session: res.createdSessionId });
        router.replace("/");
        return;
      }

      // If here, sign-in requires additional verification (MFA / email code / etc).
      // Use res.supportedFirstFactors to present options and call prepare... accordingly.
      // Example: prepare email code:
      // await signIn.prepareEmailAddressVerification({ emailAddressId: <id>, strategy: 'email_code' });
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button type="submit">Sign in</button>
      {error && <div>{error}</div>}
    </form>
  );
}
