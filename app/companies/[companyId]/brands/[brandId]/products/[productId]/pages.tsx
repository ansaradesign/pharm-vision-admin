function ProductPage({ params }: { params: { productId: string } }) {
  return <>id - {params.productId}</>;
}

export default ProductPage;
