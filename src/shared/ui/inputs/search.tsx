"use client";

import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useDebounce } from "react-use";

interface Props {
  searchFunc: (value: string) => void;
}

export const SearchInput = ({}: Props) => {
  const [search, setSearch] = useState("");
  const [, cancel] = useDebounce(() => {}, 1500, [search]);

  return (
    <Input
      className="w-full"
      placeholder="Поиск..."
      onChange={(e) => {
        cancel();
        setSearch(e.target.value);
      }}
    />
  );
};
