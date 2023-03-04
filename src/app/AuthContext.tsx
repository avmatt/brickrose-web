"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type AuthContextProps = {
  children: React.ReactNode;
  session: Session;
};

export const AuthContext = ({ children }: AuthContextProps) => (
  <SessionProvider>{children}</SessionProvider>
);
