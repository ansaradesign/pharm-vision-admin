import { PropsWithChildren } from 'react';

import { Flex } from './primitives/flex';

export const InfoContainer = ({ children }: PropsWithChildren) => {
  return (
    <Flex className='p-4 border-1 border-divider rounded-2xl relative overflow-hidden'>
      {children}
    </Flex>
  );
};
