"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { LazyMotion, MotionConfig } from "framer-motion";
import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const loadFeatures = () =>
  import("@/src/shared/config/dom-max").then((res) => res.domMax);

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <LazyMotion features={loadFeatures}>
      <MotionConfig
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <SessionProvider>
          <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
