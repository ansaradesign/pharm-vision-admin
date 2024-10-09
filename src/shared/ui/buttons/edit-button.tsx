"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import { Pen } from "@phosphor-icons/react";

export const EditButton = ({
  className,
  color = "primary",
  ...restProps
}: ButtonProps) => {
  return (
    <Button
      className={"px-6 font-medium " + className}
      color={color}
      startContent={<Pen size={18} weight="bold" />}
      {...restProps}
    >
      Редактировать
    </Button>
  );
};
