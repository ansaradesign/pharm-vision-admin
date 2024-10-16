import { OfferBanner } from '@/src/entities/offer';
import { TitleContainer } from '@/src/shared/ui/title-container';
import { TestOffer } from '@/src/widgets/offer';

export const ProductSection = () => {
  return (
    <TitleContainer title='Спецпредложения'>
      <div className='grid grid-cols-3 gap-4'>
        <OfferBanner {...TestOffer} />
        <OfferBanner {...TestOffer} />
        <OfferBanner {...TestOffer} />
        <OfferBanner {...TestOffer} />
        <OfferBanner {...TestOffer} />
      </div>
    </TitleContainer>
  );
};
