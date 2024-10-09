import { CompanyPage } from '@/src/page/company';

function Company({ params }: { params: { companyId: string } }) {
  return <CompanyPage id={params.companyId} />;
}

export default Company;
