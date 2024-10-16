import { IOfferSectionElement } from '../../model/offer-section-element.type';

import { IFullProduct } from '@/src/entities/product';

export const getFormattedBrands = (products: IFullProduct[]) => {
  const brands: IOfferSectionElement[] = [];

  products.forEach((product) => {
    const isBrandInBrands = brands.some((brand) => brand.id === product.brand.id);

    if (!isBrandInBrands) {
      const { id, name, description, logo } = product.brand;

      brands.push({ id, title: name, description, icon: logo });
    }
  });

  return brands;
};
