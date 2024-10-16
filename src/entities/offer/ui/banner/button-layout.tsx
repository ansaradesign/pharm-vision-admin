'use client';

import { useParams, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { IOffer } from '../../model';
import { OfferBannerBackgrounds } from '../../model/banner-backgrounds';

type Props = PropsWithChildren & Pick<IOffer, 'id' | 'banner_color'>;

export const ButtonLayout = ({ children, id, banner_color }: Props) => {
  const router = useRouter();
  const { companyId } = useParams();

  const goToOffer = () => {
    router.push(`/companies/${companyId}/offers/${id}`);
  };

  const backgroundColor = OfferBannerBackgrounds[banner_color];

  return (
    <button
      className=' bg-orange-100 p-4 relative overflow-clip py-10 rounded-3xl text-start'
      style={{ backgroundColor }}
      onClick={goToOffer}
    >
      {children}
    </button>
  );
};
