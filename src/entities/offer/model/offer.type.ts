import { EOfferBannerColors } from './banner-backgrounds';

export interface IOfferCondition {
  id: number;
  variant: 'amount' | 'price';
  type: 'from' | 'to' | 'from_to';
  from_value?: number;
  to_value?: number;
}

export interface IOffer {
  id: number;
  profit: number;
  profitType: 'static' | 'from';
  condition?: IOfferCondition;
  banner_image: string;
  banner_color: EOfferBannerColors;
  date_from: string;
  date_to: string;
}
