"use client";

import { ArrowDown } from "@phosphor-icons/react/";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { MotionLayout } from "../layouts/motion-layout";

interface ITitle {
  id: string;
  title: React.ReactNode;
  width: string;
  isSort?: boolean;
  parseFunc?: (value: any) => number;
}

interface IData extends Record<string, string | React.ReactNode | number> {
  id: string | number;
}

interface Props {
  titles: ITitle[];
  data: IData[];
  minWidth?: number;
  link?: string;
}

export const Table = ({ titles, data, minWidth, link }: Props) => {
  const router = useRouter();
  const [dataState, setDataState] = useState(data);
  const [lastSortId, setLastSortId] = useState<string | null>(null);
  const [lastSort, setLastSort] = useState<string | null>(null);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const handleSort = (id: string, parseFunc: (value: any) => number) => {
    const sortedData = structuredClone(data);

    if (lastSortId !== id || lastSort === "desc") {
      sortedData.sort((a, b) => parseFunc(b[id]) - parseFunc(a[id]));
      setDataState(sortedData);
      setLastSort("abs");
    } else if (lastSort === "abs") {
      sortedData.sort((a, b) => parseFunc(a[id]) - parseFunc(b[id]));
      setDataState(sortedData);
      setLastSort("desc");
    }
    setLastSortId(id);
  };

  const arrowClass = clsx("transition-all absolute right-2 -translate-y-1/2", {
    "rotate-180": lastSort === "abs",
  });

  const handleRedirect = (id?: string | number) => {
    if (link) {
      router.push(`${link}/${id ? id?.toString() : ""}`);
    }
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide w-full pb-12 rounded-medium">
      <table className="w-full" style={{ minWidth }}>
        <thead>
          <tr>
            {titles.map((title, i) => (
              <th
                key={title.id}
                className="bg-background dark:bg-default sticky top-0 last:rounded-r-medium 
                          first:rounded-l-medium pl-5 leading-5 py-3 h-full"
                style={{ width: title.width }}
              >
                <button
                  className={`text-start text-[14px] relative pr-9  ${!title.isSort ? "cursor-auto" : ""} w-full`}
                  onClick={() => {
                    if (title.isSort && title.parseFunc) {
                      handleSort(title.id, title.parseFunc);
                    }
                  }}
                >
                  {title.title}
                  <AnimatePresence>
                    {lastSortId === title.id ? (
                      <MotionLayout
                        animate={{
                          opacity: 0.6,
                          top: "50%",
                        }}
                        className={arrowClass}
                        exit={{
                          opacity: 0,
                        }}
                        initial={{
                          opacity: 0,
                          top: 40,
                        }}
                      >
                        <ArrowDown size={20} />
                      </MotionLayout>
                    ) : null}
                  </AnimatePresence>
                </button>
                {i !== titles.length - 1 ? (
                  <div className="h-6 w-[1px] bg-divider absolute right-0 -translate-y-1/2 top-1/2" />
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataState.map((row, i) => {
            const { id, ...rest } = row;

            const cols = Object.values(row);

            return (
              <tr key={id + i.toString()}>
                {cols.map((value, i) => (
                  <td
                    key={id + "_" + Object.keys(rest)[i]}
                    className="pt-2 px-0"
                  >
                    <button
                      className={`w-full text-start pl-5 py-4 ${!link ? "cursor-auto" : "pointer"} 
                                  bg-default bg-opacity-50 ${i === 0 ? "rounded-l-medium" : ""} 
                                  ${i === cols.length - 1 ? "rounded-r-medium" : ""}`}
                      onClick={() => handleRedirect(id)}
                    >
                      {value}
                    </button>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
