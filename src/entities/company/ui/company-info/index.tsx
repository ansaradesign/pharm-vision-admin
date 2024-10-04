import Image from "next/image";

import { ICompany } from "../../model";

import { Flex } from "@/src/shared/ui/primitives/flex";
import { LabelLayout } from "@/src/shared/ui/layouts/label-layout";
import { Text } from "@/src/shared/ui/primitives/text";
import { SquareImage } from "@/src/shared/ui/square-image";

interface Props extends Omit<ICompany, "promotionId" | "name"> {}

export const CompanyInfo = ({ banner, logo, favicon, color }: Props) => {
  const logoName = logo.split("/").at(-1);
  const faviconName = logo.split("/").at(-1);

  const medias = [
    { alt: "logo", title: "Логотип", src: logo, name: logoName },
    { alt: "favicon", title: "Фавикон", src: favicon, name: faviconName },
  ];

  return (
    <>
      <Flex>
        <Flex col gap={2}>
          <LabelLayout title="Баннер">
            <Flex className="aspect-[3/2] rounded-xl overflow-hidden">
              <Image alt="banner" height={1000} src={banner} width={1000} />
            </Flex>
          </LabelLayout>
        </Flex>
        <Flex col>
          {medias.map(({ title, alt, name, src }) => (
            <button key={name} className="w-full text-start">
              <LabelLayout bgDefault hover title={title}>
                <Flex center>
                  <SquareImage alt={alt} height={70} src={src} />
                  <Text>{name}</Text>
                </Flex>
              </LabelLayout>
            </button>
          ))}
          <LabelLayout bgDefault title={"Акцентный цвет"}>
            <div
              className="w-full h-[50px] rounded-xl"
              style={{ backgroundColor: "#31cf8f" }}
            />
          </LabelLayout>
        </Flex>
      </Flex>
    </>
  );
};
