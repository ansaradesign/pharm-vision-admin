'use client';

import { useState } from 'react';

import { TestCompany } from '../../config/test-company';

import { EditCompany } from '@/src/features/company/';
import { MotionLayout } from '@/src/shared/ui/layouts/motion-layout';
import { InfoContainer } from '@/src/shared/ui/info-container';
import { CompanyInfo } from '@/src/entities/company';
import { EntityHeader } from '@/src/widgets/entity-header';

interface Props {
  id: string;
}

export const CompanyHeader = ({ id }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <EntityHeader
        category='companies'
        changeOpened={() => {
          setIsOpened((prev) => !prev);
        }}
        edit={<EditCompany />}
        id={TestCompany.promotionId}
        isOpened={isOpened}
        title={TestCompany.name}
      />
      {isOpened ? (
        <MotionLayout
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          initial={{ y: -20, opacity: 1, filter: 'blur(10px)' }}
        >
          <InfoContainer>
            <CompanyInfo {...TestCompany} />
          </InfoContainer>
        </MotionLayout>
      ) : null}
    </>
  );
};
