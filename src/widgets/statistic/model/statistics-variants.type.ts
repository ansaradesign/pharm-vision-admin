import { StatisticsVariants } from '../config/variants';

export type TStatisticsVariantsKeys = keyof typeof StatisticsVariants;
export interface IStatisticsProps {
  variant: TStatisticsVariantsKeys;
}
