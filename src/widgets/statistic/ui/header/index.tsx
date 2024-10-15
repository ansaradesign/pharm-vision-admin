'use client';
import { Select, SelectItem } from '@nextui-org/react';

import { IStatisticsProps } from '../../model/statistics-variants.type';
import { StatisticsVariants } from '../../config/variants';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { DateRangePickerInput } from '@/src/shared/ui/inputs/date-range-picker';

export const StatisticsHeader = ({ variant }: IStatisticsProps) => {
  const currentVariant = StatisticsVariants[variant];

  return (
    <Flex className='items-end'>
      <Flex col gap={0}>
        <Text size={24} tag='h1'>
          {currentVariant.title}
        </Text>
        <Text opacity={0.5}>{currentVariant.description}</Text>
      </Flex>
      <Flex center width={'fit-content'}>
        <Select className='w-60' placeholder={currentVariant.selectPlaceholder}>
          <SelectItem key={'1'}>Терфлю</SelectItem>
        </Select>
        <DateRangePickerInput
          halfTextOpacity
          className='w-60'
          range={{ start: '2024-09-08', end: '2024-10-08' }}
          onChangeRange={() => {}}
        />
      </Flex>
    </Flex>
  );
};
