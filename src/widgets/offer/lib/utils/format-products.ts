import { IOfferSectionElement } from '../../model/offer-section-element.type';

import { IFullProduct } from '@/src/entities/product';

export const formatProducts = (products: IFullProduct[]) => {
  const formattedProducts: IOfferSectionElement[] = [];

  products.forEach(({ id, name, sku, brand: { logo, id: brandId } }) => {
    formattedProducts.push({
      id,
      title: name,
      description: sku,
      icon: logo,
      dynamicParam: brandId,
    });
  });

  return formattedProducts;
};
