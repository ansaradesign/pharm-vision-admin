'use client';

import { IOfferSectionElement } from '../../model/offer-section-element.type';
import { getTitleFromBreadcrumbsByCategory } from '../../lib/utils/get-title-from-breadcrumbs-by-categoty';

import { OfferSectionElement } from './section-element';

import { TitleContainer } from '@/src/shared/ui/title-container';

interface Props {
  category: 'brands' | 'products';
  elements: IOfferSectionElement[];
}

export const OfferSection = ({ category, elements }: Props) => {
  const title = getTitleFromBreadcrumbsByCategory(category);

  return (
    <TitleContainer mt={1} title={title}>
      <div className='grid grid-cols-3 gap-4'>
        {elements.map((element) => (
          <OfferSectionElement key={element.id} href={`/${category}/${element.id}`} {...element} />
        ))}
      </div>
    </TitleContainer>
  );
};
