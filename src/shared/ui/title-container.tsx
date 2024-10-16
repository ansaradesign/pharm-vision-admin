import { PropsWithChildren } from 'react';

import { Flex } from './primitives/flex';
import { Text } from './primitives/text';

interface Props extends PropsWithChildren {
  title: string;
  endContent?: React.ReactNode;
}

export const TitleContainer = ({ title, children, endContent }: Props) => {
  return (
    <Flex col className='mt-4' tag='section'>
      <Flex className='justify-between items-end'>
        <Text size={20} tag='h2' weight={700}>
          {title}
        </Text>
        {endContent ? endContent : null}
      </Flex>
      {children}
    </Flex>
  );
};
