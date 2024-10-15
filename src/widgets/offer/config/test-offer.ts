import { IOffer, IOfferCondition } from '@/src/entities/offer';
import { EOfferBannerColors } from '@/src/entities/offer/';

export const TestCondition: IOfferCondition = {
  id: 1,
  variant: 'amount',
  type: 'from',
  from_value: 2,
  // to_value: 1000,
};

export const TestOffer: IOffer = {
  id: 1,
  profit: 30,
  profitType: 'from',
  banner_image: '',
  banner_color: 'green' as EOfferBannerColors,
  date_from: '2024-10-15',
  date_to: '2024-11-15',
  condition: TestCondition,
};
