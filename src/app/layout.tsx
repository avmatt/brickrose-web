import type { Session } from "next-auth";

import { headers } from "next/headers";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContext } from "./AuthContext";
import { TopBar } from "./TopBar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const getSession = async (cookie: string): Promise<Session> => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });
  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en" className="bg-gray-100">
      <head />
      <body>
        <AuthContext session={session}>
          <TopBar />

          {children}
        </AuthContext>
      </body>
    </html>
  );
}
