import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Text } from '../primitives/text';

interface Props extends PropsWithChildren {
  title: string;
  bgDefault?: boolean;
  hover?: boolean;
}

export const LabelLayout = ({ title, children, bgDefault, hover }: Props) => {
  const contentClass = clsx('mt-2 opacity-100', {
    'p-2 bg-default rounded-2xl': bgDefault,
    'hover:mt-1 hover:mb-1 cursor-pointer transition-all': hover,
  });

  return (
    <label className='flex flex-col w-full'>
      <Text opacity={0.7} tag={'span'}>
        {title}
      </Text>
      <div className={contentClass}>{children}</div>
    </label>
  );
};
