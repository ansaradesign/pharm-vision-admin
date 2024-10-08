"use client";

import { Button } from "@nextui-org/button";
import { Plus } from "@phosphor-icons/react";

export const AddProduct = () => {
  return (
    <Button
      isIconOnly
      className="font-medium w-fit px-6 flex items-center"
      color="primary"
      startContent={<Plus className="mr-2" size={18} weight="bold" />}
    >
      Добавить продукт
    </Button>
  );
};
