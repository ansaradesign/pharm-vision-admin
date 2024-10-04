import Image from "next/image";

import { Flex } from "./primitives/flex";

interface Props {
  height: number;
  src: string;
  alt: string;
}

export const SquareImage = ({ height, src, alt }: Props) => {
  return (
    <Flex className={`h-[${height}px] rounded-xl`} width={height}>
      <Image
        alt={alt}
        className="object-cover rounded-xl"
        height={height}
        src={src}
        width={height}
      />
    </Flex>
  );
};
