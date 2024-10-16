import { TestOffer } from '../../config/test-offer';
import { getFormattedBrands } from '../../lib/utils/get-formatted-brands';
import { IOfferSectionElement } from '../../model/offer-section-element.type';
import { formatProducts } from '../../lib/utils/format-products';

import { OfferSection } from './offer-section';

import { IFullProduct } from '@/src/entities/product';

interface Props {
  products?: IFullProduct[];
}

export const OfferSections = ({}: Props) => {
  const brands: IOfferSectionElement[] = getFormattedBrands(TestOffer.products);
  const products: IOfferSectionElement[] = formatProducts(TestOffer.products);

  return (
    <>
      <OfferSection category='brands' elements={brands} />
      <OfferSection category='products' elements={products} />
    </>
  );
};
