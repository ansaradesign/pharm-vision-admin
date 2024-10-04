"use client";

import { TestBrand } from "../../config/test-brand";

import { EntityHeader } from "@/src/widgets/entity-header";
import { EditCompany } from "@/src/features/company/edit-company";

interface Props {
  id: string;
}

export const BrandHeader = ({ id }: Props) => {
  return (
    <>
      <EntityHeader
        category="brands"
        edit={<EditCompany />}
        id={TestBrand.id}
        title={TestBrand.name}
      />
    </>
  );
};
