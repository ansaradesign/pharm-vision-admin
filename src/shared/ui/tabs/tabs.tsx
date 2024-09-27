"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ITab {
  href: string;
  label: string;
}

interface Props {
  tabs: ITab[];
}

export const CustomTabs = ({ tabs }: Props) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    tabs.forEach((tab) => {
      if (path !== tab.href) {
        router.prefetch(tab.href);
      }
    });
  }, []);

  return (
    <Tabs aria-label="Tabs Options" defaultSelectedKey={path} size="lg">
      {tabs.map((tab) => (
        <Tab
          key={tab.href}
          className="font-medium px-4 min-w-20"
          href={tab.href}
          title={tab.label}
        />
      ))}
    </Tabs>
  );
};
