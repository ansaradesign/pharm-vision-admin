import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BreadCrumbsOptions } from "../config/bread-crumbs-options";
import { useBreadCrumbs } from "../model/bread-crumbs-store";

export const CustomBreadCrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const { names } = useBreadCrumbs();

  useEffect(() => {
    let crumbs = pathname.length > 1 ? pathname.split("/").slice(1) : [];

    crumbs = crumbs.map((crumb) => `/${crumb}`);
    crumbs.unshift("/");
    setBreadcrumbs(crumbs);
  }, [pathname]);

  const getHref = (index: number) => {
    let href = "";

    for (let i = 0; i <= index; i++) {
      href += breadcrumbs[index];
    }

    return href;
  };

  return (
    <Breadcrumbs
      itemClasses={{
        item: "px-2",
        separator: "px-0",
      }}
    >
      {breadcrumbs.map((crumb, i) => {
        const label = BreadCrumbsOptions[crumb];

        const href = getHref(i);

        if (label) {
          return (
            <BreadcrumbItem key={crumb} href={href}>
              {label}
            </BreadcrumbItem>
          );
        } else {
          let category = breadcrumbs[i - 1];

          if (category) {
            category = category.slice(1);
            if (names[category]) {
              const name = names[category][crumb.slice(1)];

              return (
                <BreadcrumbItem key={crumb} href={href}>
                  {name || "..."}
                </BreadcrumbItem>
              );
            }
          }
        }
      })}
    </Breadcrumbs>
  );
};
