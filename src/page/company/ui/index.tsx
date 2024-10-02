import { BradCrumbsLayout } from "@/src/shared/ui/layouts/bread-crumbs-layout";

interface Props {
  id: string;
}

export const CompanyPage = ({ id }: Props) => {
  return (
    <BradCrumbsLayout category="companies" queryKey={["company", id]}>
      table
    </BradCrumbsLayout>
  );
};
