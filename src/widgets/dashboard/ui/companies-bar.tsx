import { Button } from '@nextui-org/button';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { CompanyLabel, ICompanyLabel } from '@/src/entities/company';
import { Flex } from '@/src/shared/ui/primitives/flex';

interface Props {
  companies: ICompanyLabel[];
}

export const CompaniesBar = ({ companies }: Props) => {
  return (
    <Flex className='p-2 border-1 border-divider rounded-[20px]' gap={2}>
      {companies.map((company) => (
        <CompanyLabel {...company} key={company.promotionId} />
      ))}
      <Button
        isIconOnly
        as={Link}
        color='primary'
        href='/companies'
        radius='lg'
        startContent={<CaretRight size={20} weight='bold' />}
      />
    </Flex>
  );
};
