"use client";

import { logIn, signUp } from "@/actions/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AuthFormBtn from "./auth-form-btn";
import { useFormState } from "react-dom";

type AuthFormProps = {
  type: "logIn" | "signUp";
};

export default function AuthForm({ type }: AuthFormProps) {
  const [authError, dispatchAuth] = useFormState(
    type === "logIn" ? logIn : signUp,
    undefined
  );

  return (
    <form action={dispatchAuth}>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" required maxLength={100} />
      </div>
      <div className="mb-4 mt-2 space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          required
          maxLength={100}
        />
      </div>

      <AuthFormBtn type={type} />

      {authError && (
        <p className="text-red-500 text-sm mt-2">{authError.message}</p>
      )}
    </form>
  );
}
