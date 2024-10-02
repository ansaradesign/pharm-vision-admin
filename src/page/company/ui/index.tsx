import { BreadCrumbsLayout } from "@/src/features/bread-crumbs";

interface Props {
  id: string;
}

export const CompanyPage = ({ id }: Props) => {
  return (
    <BreadCrumbsLayout category="companies" queryKey={["company", id]}>
      table
    </BreadCrumbsLayout>
  );
};
