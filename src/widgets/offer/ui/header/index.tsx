'use client';

import { EditOffer } from '@/src/features/offer';
import { SquareImage } from '@/src/shared/ui/square-image';
import { DateManager } from '@/src/shared/lib/utils/date-manager';
import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';
import {
  Condition,
  generateOfferProfit,
  IOffer,
  IOfferCondition,
  OfferBannerBackgrounds,
} from '@/src/entities/offer';

export const OfferHeader = ({ condition, ...offer }: IOffer) => {
  const { title } = condition ? new Condition(condition as IOfferCondition) : { title: '' };
  const profit = generateOfferProfit(offer.profit, offer.profitType);

  const backgroundColor = OfferBannerBackgrounds[offer.banner_color];

  return (
    <div
      className={`w-full flex flex-col gap-4 p-8 rounded-2xl text-black relative`}
      style={{ backgroundColor }}
    >
      <Flex col className='!text-black mb-4' gap={0}>
        <Text size={24} weight={700}>
          {profit}
        </Text>
        <Text>{title}</Text>
        <Text opacity={0.5}>
          C {DateManager.formatDateToStringMonth(offer.date_from)} до{' '}
          {DateManager.formatDateToStringMonth(offer.date_to)}
        </Text>
      </Flex>
      <EditOffer />
      <SquareImage
        alt='offer banner image'
        className='absolute bottom-2 right-2'
        height={160}
        src={offer.banner_image}
      />
    </div>
  );
};
