"use client";

import { CustomAreaChart } from "@/src/shared/ui/chart/area-chart";
import { CustomBarChart } from "@/src/shared/ui/chart/bar-chart";
import { CustomLineChart } from "@/src/shared/ui/chart/line-chart";
import { RadialChart } from "@/src/shared/ui/chart/radial-chart";
import { DateRangePickerInput } from "@/src/shared/ui/inputs/date-range-picker";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { TitleContainer } from "@/src/shared/ui/title-container";
import { DailyWithdrawalChart } from "@/src/shared/config/charts-info/daily-withdrawal-chart";
import { DailyCashbackChart } from "@/src/shared/config/charts-info/daily-cashback-chart";

export const CompanyStatistic = () => {
  return (
    <TitleContainer
      endContent={
        <DateRangePickerInput
          halfTextOpacity
          className="w-fit"
          range={{ start: "2024-09-04", end: "2024-10-04" }}
          onChangeRange={() => {}}
        />
      }
      title="Статистика"
    >
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
