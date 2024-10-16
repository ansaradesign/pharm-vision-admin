'use client';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { SquareImage } from '@/src/shared/ui/square-image';

interface Props {
  title: string;
  edit?: React.ReactNode;
  icon?: string;
  description: string;
  titleSize?: number;
}

export const EntityHeader = ({ title, edit, titleSize = 24, description, icon }: Props) => {
  return (
    <Flex className='items-center'>
      <Flex center gap={2}>
        {icon ? (
          <SquareImage alt='logo' className='rounded-full mr-2' height={70} src={icon} />
        ) : null}
        <Flex col gap={0} width={'fit-content'}>
          <Text size={titleSize} tag='h2' weight={700}>
            {title}
          </Text>
          <Text opacity={0.5}>{description}</Text>
        </Flex>
      </Flex>
      {edit ? edit : null}
    </Flex>
  );
};
