import Image from "next/image";

import { Flex } from "./primitives/flex";

interface Props {
  height: number;
  src: string;
  alt: string;
  className?: string;
}

export const SquareImage = ({ height, src, alt, className }: Props) => {
  return (
    <Flex
      className={`h-[${height}px]  overflow-hidden ${className || "rounded-xl"}`}
      width={height}
    >
      <Image
        alt={alt}
        className="object-cover"
        height={height}
        src={src}
        width={height}
      />
    </Flex>
  );
};
