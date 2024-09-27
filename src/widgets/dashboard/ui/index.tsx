"use client";

import { DailyWithdrawalChart } from "../config/daily-withdrawal-chart";
import { DailyCashbackChart } from "../config/daily-cashback-chart";
import { CompaniesList } from "../config/companies-list";
import { MostWithdrawalData } from "../config/most-withdrawal-companies";

import { DashboardHeader } from "./dashboard-header";
import { CompaniesBar } from "./companies-bar";
import { DashboardContainer } from "./dashboard-container";

import { CustomBarChart } from "@/src/shared/ui/chart/bar-chart";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { RadialChart } from "@/src/shared/ui/chart/radial-chart";
import { CustomAreaChart } from "@/src/shared/ui/chart/area-chart";
import { CustomPieChart } from "@/src/shared/ui/chart/pie-chart";
import { CustomLineChart } from "@/src/shared/ui/chart/line-chart";

export const Dashboard = () => {
  return (
    <Flex col>
      <DashboardHeader
        amount={124_420}
        dateRange={{ end: "2024-09-26", start: "2024-08-26" }}
        onChangeDateRange={() => {}}
      />
      <DashboardContainer title="Компании">
        <CompaniesBar companies={CompaniesList} />
      </DashboardContainer>

      <DashboardContainer title="Статистика">
        <Flex>
          <CustomBarChart {...DailyWithdrawalChart} color="blue" />
          <CustomBarChart {...DailyCashbackChart} color="orange" />
        </Flex>
        <Flex>
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
          <CustomAreaChart {...DailyWithdrawalChart} color="purple" />
          <CustomPieChart
            data={MostWithdrawalData}
            description="Доли пользователей"
            footerDescription={`${MostWithdrawalData[0].withdrawal} пользователей`}
            footerTitle={`${MostWithdrawalData[0].name} - №1`}
            label="name"
            otherValue={3000}
            title="Пользователи"
            value="withdrawal"
          />
        </Flex>
        <CustomLineChart {...DailyWithdrawalChart} color="mint" />
      </DashboardContainer>
    </Flex>
  );
};
