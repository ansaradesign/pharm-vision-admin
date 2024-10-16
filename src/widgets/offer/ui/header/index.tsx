'use client';

import { TestCondition, TestOffer } from '../../config/test-offer';

import { Condition, IOfferCondition, OfferBannerBackgrounds } from '@/src/entities/offer';
import { generateOfferProfit } from '@/src/entities/offer';
import { EditOffer } from '@/src/features/offer';
import { SquareImage } from '@/src/shared/ui/square-image';
import { DateManager } from '@/src/shared/lib/utils/date-manager';
import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const OfferHeader = () => {
  const { title } = new Condition(TestCondition as IOfferCondition);
  const profit = generateOfferProfit(TestOffer.profit, TestOffer.profitType);

  const backgroundColor = OfferBannerBackgrounds[TestOffer.banner_color];

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
          C {DateManager.formatDateToStringMonth(TestOffer.date_from)} до{' '}
          {DateManager.formatDateToStringMonth(TestOffer.date_to)}
        </Text>
      </Flex>
      <EditOffer />
      <SquareImage
        alt='offer banner image'
        className='absolute bottom-2 right-2'
        height={160}
        src={TestOffer.banner_image}
      />
    </div>
  );
};
