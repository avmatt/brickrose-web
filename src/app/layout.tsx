import { config } from "@fortawesome/fontawesome-svg-core";
import { TopBar } from "./TopBar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-100">
      <head />
      <body>
        <TopBar />

        {children}
      </body>
    </html>
  );
}
