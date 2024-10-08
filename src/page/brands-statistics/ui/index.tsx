import { Flex } from "@/src/shared/ui/primitives/flex";
import { BrandsStatistics, StatisticsHeader } from "@/src/widgets/statistic";

export const BrandsStatisticsPage = () => {
  return (
    <Flex col>
      <StatisticsHeader />
      <BrandsStatistics />
    </Flex>
  );
};
