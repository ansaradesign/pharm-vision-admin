import { IFullProduct } from '../../product';

import { EOfferBannerColors } from './banner-backgrounds';

export interface IOfferCondition {
  id: number;
  variant: 'amount' | 'price';
  type: 'from' | 'to' | 'from_to';
  from_value?: number;
  to_value?: number;
}

export type TConditionVariant = 'amount' | 'price';
export type TConditionType = 'from' | 'to' | 'from_to';

export interface IOffer {
  id: number;
  profit: number;
  profitType: TProfitType;
  condition?: IOfferCondition;
  banner_image: string;
  banner_color: EOfferBannerColors;
  date_from: string;
  date_to: string;
}

export type TProfitType = 'static' | 'from';

export interface IFullOffer extends IOffer {
  products: IFullProduct[];
}
