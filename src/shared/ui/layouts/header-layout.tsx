"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { HeaderVariants } from "../../config/header-variants";

import { Header } from "@/src/widgets/header";

function HeaderLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const headerVariant = HeaderVariants[pathname];

  const mainClass = clsx("overflow-y-scroll py-8 px-8 scrollbar-hide", {
    "h-dvh": headerVariant === "none",
    "h-[calc(100vh-75px)]": headerVariant === "low",
    "h-[calc(100vh-116px)]": !headerVariant,
  });

  return (
    <div className="h-dvh overflow-hidden">
      <Header pathname={pathname} />
      <main className={mainClass}>{children}</main>
    </div>
  );
}

export default HeaderLayout;
