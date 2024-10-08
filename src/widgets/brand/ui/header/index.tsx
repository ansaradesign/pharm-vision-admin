"use client";

import { TestBrand } from "../../config/test-brand";

import { EntityHeader } from "@/src/shared/ui/entity-header";
import { EditCompany } from "@/src/features/company/edit-company";

interface Props {
  id: string;
}

export const BrandHeader = ({ id }: Props) => {
  return (
    <>
      <EntityHeader
        category="brands"
        description={TestBrand.description}
        edit={<EditCompany />}
        icon={TestBrand.icon}
        id={TestBrand.id}
        title={TestBrand.name}
        titleSize={24}
      />
    </>
  );
};
