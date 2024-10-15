'use client';

import { Button } from '@nextui-org/button';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import clsx from 'clsx';

import { TBreadCrumbsDynamic, useBreadCrumbs } from '@/src/features/bread-crumbs';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { SquareImage } from '@/src/shared/ui/square-image';
import { Text } from '@/src/shared/ui/primitives/text';

interface Props {
  id?: string | number;
  title: string;
  edit?: React.ReactNode;
  category?: TBreadCrumbsDynamic;
  isOpened?: boolean;
  icon?: string;
  changeOpened?: VoidFunction;
  description?: string;
  titleSize?: number;
}

export const EntityHeader = ({
  title,
  edit,
  category,
  id,
  isOpened,
  icon,
  changeOpened,
  titleSize = 32,
  description,
}: Props) => {
  const { addName } = useBreadCrumbs();

  if (id && category) {
    addName(category, id.toString(), title);
  }

  const caretClass = clsx('transition-all', {
    '-rotate-180': isOpened,
  });

  return (
    <Flex className='items-end'>
      <Flex center gap={2}>
        {icon ? (
          <SquareImage alt='logo' className='rounded-full mr-2' height={70} src={icon} />
        ) : null}
        <Flex center width={'fit-content'}>
          <Flex col gap={0}>
            <Text size={titleSize} tag='h2' weight={700}>
              {title}
            </Text>
            <Text opacity={0.5}>{description}</Text>
          </Flex>
          {typeof isOpened !== 'undefined' ? (
            <Button
              isIconOnly
              startContent={
                <CaretDown className={caretClass} opacity={0.5} size={20} weight='bold' />
              }
              variant='light'
              onClick={changeOpened}
            />
          ) : null}
        </Flex>
      </Flex>

      {edit ? edit : null}
    </Flex>
  );
};
