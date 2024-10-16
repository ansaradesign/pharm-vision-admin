import { IOfferCondition } from '@/src/entities/offer';
import { EOfferBannerColors } from '@/src/entities/offer/';
import { IFullOffer } from '@/src/entities/offer/model/offer.type';
import { IFullProduct } from '@/src/entities/product';

export const TestCondition: IOfferCondition = {
  id: 1,
  variant: 'amount',
  type: 'from',
  from_value: 2,
  // to_value: 1000,
};

const TestProductsList: IFullProduct[] = [
  {
    id: 1,
    name: 'Нурофен порошок 6 пак.',
    sku: '12Bb23b1',
    fixCashback: 30,
    cashbackType: 'percent',
    brand: {
      id: 1,
      name: 'Нурофен',
      promotionId: 'r-pharm',
      description: 'Средство от простуды',
      logo: 'https://pharm-vision.vercel.app/_next/image?url=%2Fnurofen_logo.png&w=96&q=75',
    },
  },
  {
    id: 2,
    name: 'Нурофен таб. 10 шт.',
    sku: '1q23xqwb1',
    fixCashback: 30,
    cashbackType: 'percent',
    brand: {
      id: 1,
      name: 'Нурофен',
      promotionId: 'r-pharm',
      description: 'Средство от простуды',
      logo: 'https://pharm-vision.vercel.app/_next/image?url=%2Fnurofen_logo.png&w=96&q=75',
    },
  },
  {
    id: 3,
    name: 'Нурофен cироп 200 мл.',
    sku: '1q23xqwb1',
    fixCashback: 30,
    cashbackType: 'percent',
    brand: {
      id: 1,
      name: 'Нурофен',
      promotionId: 'r-pharm',
      description: 'Средство от простуды',
      logo: 'https://pharm-vision.vercel.app/_next/image?url=%2Fnurofen_logo.png&w=96&q=75',
    },
  },
  {
    id: 4,
    name: 'Терафлю cироп 200 мл.',
    sku: '1q23xqwb1',
    fixCashback: 30,
    cashbackType: 'percent',
    brand: {
      id: 2,
      name: 'Терафлю',
      promotionId: 'r-pharm',
      description: 'Средство от простуды',
      logo: 'https://pharm-vision.vercel.app/_next/image?url=%2Ftheraflu_logo.png&w=96&q=75',
    },
  },
  {
    id: 5,
    name: 'Терафлю cироп 200 мл.',
    sku: '1q23xqwb1',
    fixCashback: 30,
    cashbackType: 'percent',
    brand: {
      id: 2,
      name: 'Терафлю',
      promotionId: 'r-pharm',
      description: 'Средство от простуды',
      logo: 'https://pharm-vision.vercel.app/_next/image?url=%2Ftheraflu_logo.png&w=96&q=75',
    },
  },
];

export const TestOffer: IFullOffer = {
  id: 1,
  profit: 30,
  profitType: 'from',
  banner_image: 'https://pharm-vision.vercel.app/_next/image?url=%2Fnurofen.png&w=256&q=100',
  banner_color: 'orange' as EOfferBannerColors,
  date_from: '2024-10-15',
  date_to: '2024-11-15',
  condition: TestCondition,
  products: TestProductsList,
};
