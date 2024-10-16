import { TestBrand } from '../../config/test-brand';

import { EditBrand } from '@/src/features/brand';
import { BreadCrumbsLayout } from '@/src/features/bread-crumbs';
import { EntityHeader } from '@/src/widgets/entity-header';

interface Props {
  id: string;
}

export const BrandHeader = ({ id }: Props) => {
  return (
    <BreadCrumbsLayout category='brands' id={TestBrand.id} title={TestBrand.name}>
      <EntityHeader
        description={TestBrand.description}
        edit={<EditBrand />}
        icon={TestBrand.logo}
        title={TestBrand.name}
      />
    </BreadCrumbsLayout>
  );
};
