import { OfferHeader } from '@/src/entities/offer';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { OfferSections, TestOffer } from '@/src/widgets/offer';

export const OfferPage = () => {
  return (
    <Flex col>
      <OfferHeader {...TestOffer} />
      <OfferSections />
    </Flex>
  );
};
