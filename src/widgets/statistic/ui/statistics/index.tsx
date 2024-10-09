"use client";

import { DailyCashbackChart } from "@/src/shared/config/charts-info/daily-cashback-chart";
import { DailyWithdrawalChart } from "@/src/shared/config/charts-info/daily-withdrawal-chart";
import { CustomAreaChart } from "@/src/shared/ui/chart/area-chart";
import { CustomBarChart } from "@/src/shared/ui/chart/bar-chart";
import { CustomLineChart } from "@/src/shared/ui/chart/line-chart";
import { RadialChart } from "@/src/shared/ui/chart/radial-chart";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { TitleContainer } from "@/src/shared/ui/title-container";

export const BrandsStatistics = () => {
  return (
    <TitleContainer title="Статистика">
      <Flex>
        <CustomBarChart {...DailyWithdrawalChart} color="blue" />
        <CustomBarChart {...DailyCashbackChart} color="orange" />
      </Flex>
      <CustomLineChart {...DailyWithdrawalChart} color="mint" />
      <Flex>
        <CustomAreaChart {...DailyWithdrawalChart} color="purple" />
        <RadialChart
          amount={524}
          color="pink"
          description="Кол-во одобренных чеков"
          footerDescription={`Всего ${556} чеков`}
          footerTitle={`${Math.round((524 * 100) / 556)}% чеков одобрены`}
          fullAmount={556}
          label="Чеков"
          title="Одобренные чеки"
        />
      </Flex>
    </TitleContainer>
  );
};
