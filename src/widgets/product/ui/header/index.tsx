"use client";

import { useState } from "react";

import { TestProduct } from "../../config/test-product";

import { EditProduct } from "@/src/features/product";
import { EntityHeader } from "@/src/shared/ui/entity-header";
import { MotionLayout } from "@/src/shared/ui/layouts/motion-layout";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

export const ProductHeader = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <EntityHeader
        category="products"
        changeOpened={() => setIsOpened((prev) => !prev)}
        description={"SKU: " + TestProduct.sku}
        edit={<EditProduct />}
        id={TestProduct.id}
        isOpened={isOpened}
        title={TestProduct.name}
        titleSize={24}
      />
      {isOpened ? (
        <MotionLayout
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          className="mt-2"
          initial={{ y: -20, opacity: 1, filter: "blur(10px)" }}
        >
          <Flex className="rounded-3xl items-center" width={"fit-content"}>
            <Text size={40} tag="h3" weight={600}>
              {TestProduct.fixCashback}
              {TestProduct.cashbackType === "percent" ? "%" : "₽"}
            </Text>
            <Text className="leading-4 w-32 mt-1" opacity={0.5}>
              Фиксированный кэшбек
            </Text>
          </Flex>
        </MotionLayout>
      ) : null}
    </>
  );
};
