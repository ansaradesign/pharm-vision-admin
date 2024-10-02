import { CompanyPage } from "@/src/page/company";

function Company({ params }: { params: { id: string } }) {
  return <CompanyPage {...params} />;
}

export default Company;
