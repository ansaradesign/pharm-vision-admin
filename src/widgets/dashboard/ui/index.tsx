"use client";

import { CompaniesList } from "../config/companies-list";

import { DashboardHeader } from "./dashboard-header";
import { CompaniesBar } from "./companies-bar";
import { DashboardStatistic } from "./dashboard-statistic";

import { Flex } from "@/src/shared/ui/primitives/flex";
import { TitleContainer } from "@/src/shared/ui/title-container";

export const Dashboard = () => {
  return (
    <Flex col>
      <DashboardHeader
        amount={124_420}
        dateRange={{ end: "2024-09-26", start: "2024-08-26" }}
        onChangeDateRange={() => {}}
      />
      <TitleContainer title="Компании">
        <CompaniesBar companies={CompaniesList} />
      </TitleContainer>

      <TitleContainer title="Статистика">
        <DashboardStatistic />
      </TitleContainer>
    </Flex>
  );
};
