import { Flex } from '@/src/shared/ui/primitives/flex';
import { StatisticsCharts, StatisticsHeader } from '@/src/widgets/statistic';

export const OffersStatisticsPage = () => {
  return (
    <Flex col>
      <StatisticsHeader variant='offers' />
      <StatisticsCharts variant='offers' />
    </Flex>
  );
};
