import { ProductPage } from '@/src/page/product';

function Product({ params }: { params: { productId: string } }) {
  return <ProductPage id={+params.productId} />;
}

export default Product;
