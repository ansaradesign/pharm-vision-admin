"use client";

import { Button } from "@nextui-org/button";
import { Plus } from "@phosphor-icons/react";

export const AddCompany = () => {
  return (
    <Button className="px-6" endContent={<Plus size={16} weight="bold" />}>
      Добавить
    </Button>
  );
};
