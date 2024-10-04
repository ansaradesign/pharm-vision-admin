import { BrandPage } from "@/src/page/brand/";

function Brand({ params }: { params: { brandId: string } }) {
  return <BrandPage id={params.brandId} />;
}

export default Brand;
