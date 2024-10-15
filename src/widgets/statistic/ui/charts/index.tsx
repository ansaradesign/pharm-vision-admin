'use client';

import { StatisticsVariants } from '../../config/variants';
import { IStatisticsProps } from '../../model/statistics-variants.type';

import { TitleContainer } from '@/src/shared/ui/title-container';

export const StatisticsCharts = ({ variant }: IStatisticsProps) => {
  const Component = StatisticsVariants[variant].chartComponent;

  return (
    <TitleContainer title='Статистика'>
      <Component />
    </TitleContainer>
  );
};
