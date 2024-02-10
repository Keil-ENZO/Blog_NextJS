"use client";

import { signIn } from "next-auth/react";

export const LoginBtn = () => {
  return (
    <button
      onClick={async () => {
        await signIn();
      }}
      className="border p-5 rounded-lg w-[200px]"
    >
      Login
    </button>
  );
};
