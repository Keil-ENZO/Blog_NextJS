"use client";

import { signOut } from "next-auth/react";

export const LogoutBtn = () => {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
      className="border p-5 rounded-lg w-[200px]"
    >
      Logout
    </button>
  );
};
