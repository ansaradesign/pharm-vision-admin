import { PropsWithChildren } from 'react';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

interface Props extends PropsWithChildren {
  title: string;
}

export const DashboardContainer = ({ title, children }: Props) => {
  return (
    <Flex col className='mt-4'>
      <Text size={20} tag='h2' weight={700}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
