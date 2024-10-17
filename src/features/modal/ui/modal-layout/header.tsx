import { ModalLayoutProps } from '.';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const ModalLayoutHeader = ({
  title,
  description,
}: Pick<ModalLayoutProps, 'title' | 'description'>) => {
  return (
    <Flex col className='mb-4' gap={2}>
      <Text size={22} tag='h3' weight={600}>
        {title}
      </Text>
      {description && <Text opacity={0.5}>{description}</Text>}
    </Flex>
  );
};
