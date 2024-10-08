"use client";

import { Button } from "@nextui-org/button";
import { Pen } from "@phosphor-icons/react";

export const EditCompany = () => {
  return (
    <Button
      className="font-medium px-6"
      color="primary"
      startContent={<Pen size={18} weight="bold" />}
    >
      Редактировать
    </Button>
  );
};
