import { TestProduct } from '../../config/test-product';

import { BreadCrumbsLayout } from '@/src/features/bread-crumbs';
import { EditProduct } from '@/src/features/product';
import { EntityHeader } from '@/src/widgets/entity-header';

export const ProductHeader = () => {
  const description = `sku ${TestProduct.sku} ${
    TestProduct.fixCashback
      ? `, Фиксированный кешбэк: ${TestProduct.fixCashback}${TestProduct.cashbackType === 'percent' ? '%' : '₽'}`
      : ''
  }`;

  return (
    <BreadCrumbsLayout category='products' id={TestProduct.id} title={TestProduct.name}>
      <EntityHeader description={description} edit={<EditProduct />} title={TestProduct.name} />
    </BreadCrumbsLayout>
  );
};
