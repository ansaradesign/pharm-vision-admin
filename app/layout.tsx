import "./globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { headers } from "next/headers";

import { Providers } from "./providers";

import { fontSans } from "@/src/shared/config/fonts";
import { Header } from "@/src/widgets/header";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const currentUrl = headersList.get("referer") || headersList.get("host");

  const pathname = currentUrl ? new URL(currentUrl).pathname : "/";

  return (
    <html suppressHydrationWarning lang="ru">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-dvh overflow-hidden">
            <Header />
            <main
              className={`${pathname === "/" ? "h-[calc(100vh-75px)]" : "h-[calc(100vh-116px)]"} overflow-y-scroll py-8 px-8 scrollbar-hide`}
            >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
