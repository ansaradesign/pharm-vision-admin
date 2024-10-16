'use client';

import { TestBrand } from '../../config/test-brand';

import { EntityHeader } from '@/src/widgets/entity-header';
import { EditBrand } from '@/src/features/brand';

interface Props {
  id: string;
}

export const BrandHeader = ({ id }: Props) => {
  return (
    <EntityHeader
      category='brands'
      description={TestBrand.description}
      edit={<EditBrand />}
      icon={TestBrand.logo}
      id={TestBrand.id}
      title={TestBrand.name}
      titleSize={24}
    />
  );
};
