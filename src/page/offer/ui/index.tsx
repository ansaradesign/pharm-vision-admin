import { Flex } from '@/src/shared/ui/primitives/flex';
import { OfferHeader, OfferSections } from '@/src/widgets/offer';

export const OfferPage = () => {
  return (
    <Flex col>
      <OfferHeader />
      <OfferSections />
    </Flex>
  );
};
