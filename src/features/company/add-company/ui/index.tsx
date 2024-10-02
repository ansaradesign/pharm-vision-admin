"use client";

import { Button } from "@nextui-org/button";
import { Plus } from "@phosphor-icons/react";

export const AddCompany = () => {
  return (
    <Button
      isIconOnly
      className="font-medium"
      color="primary"
      startContent={<Plus size={18} weight="bold" />}
    />
  );
};
