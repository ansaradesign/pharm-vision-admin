"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import { Plus } from "@phosphor-icons/react";

interface Props extends ButtonProps {
  item: string;
}

export const AddButton = ({
  className,
  color = "primary",
  item,
  ...restProps
}: Props) => {
  return (
    <Button
      className={"px-6 font-medium " + className}
      color={color}
      startContent={<Plus size={18} weight="bold" />}
      {...restProps}
    >
      Добавить {item}
    </Button>
  );
};
