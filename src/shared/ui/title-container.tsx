import { PropsWithChildren } from 'react';

import { Flex } from './primitives/flex';
import { Text } from './primitives/text';

interface Props extends PropsWithChildren {
  title: string;
  endContent?: React.ReactNode;
  mt?: number;
}

export const TitleContainer = ({ title, children, endContent, mt = 4 }: Props) => {
  const marginTop = mt * 4;

  return (
    <section style={{ marginTop }}>
      <Flex className='justify-between items-end mb-4'>
        <Text size={20} tag='h2' weight={700}>
          {title}
        </Text>
        {endContent ? endContent : null}
      </Flex>
      {children}
    </section>
  );
};
