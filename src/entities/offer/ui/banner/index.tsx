import { generateOfferProfit } from '../../lib/generate-profit';
import { IOffer } from '../../model/offer.type';
import { Condition } from '../../model/condition';

import { ButtonLayout } from './button-layout';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { DateManager } from '@/src/shared/lib/utils/date-manager';
import { SquareImage } from '@/src/shared/ui/square-image';

export const OfferBanner = ({
  banner_color,
  banner_image,
  profit,
  profitType,
  condition,
  date_to,
  id,
}: IOffer) => {
  const { title } = condition ? new Condition(condition) : { title: '' };

  return (
    <ButtonLayout banner_color={banner_color} id={id}>
      <Flex col gap={1} width={'60%'}>
        <Text className='text-black' size={20} weight={700}>
          {generateOfferProfit(profit, profitType)}
        </Text>
        {condition && (
          <Text className='text-black leading-5 mb-1' size={16} weight={500}>
            {title}
          </Text>
        )}
        <Text className='text-black' opacity={0.5} size={16} weight={500}>
          {`До ${DateManager.formatDateToStringMonth(date_to)}`}
        </Text>
      </Flex>

      <SquareImage
        alt='Баннер спецпредложения'
        className={'absolute bottom-1 right-4'}
        height={120}
        src={banner_image}
      />
    </ButtonLayout>
  );
};
