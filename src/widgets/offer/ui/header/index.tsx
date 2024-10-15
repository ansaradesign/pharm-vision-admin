import { TestCondition, TestOffer } from '../../config/test-offer';

import { EntityHeader } from '@/src/widgets/entity-header';
import { Condition, IOfferCondition } from '@/src/entities/offer';
import { generateOfferProfit } from '@/src/entities/offer';
import { EditOffer } from '@/src/features/offer';

export const OfferHeader = () => {
  const { title } = new Condition(TestCondition as IOfferCondition);
  const profit = generateOfferProfit(TestOffer.profit, TestOffer.profitType);

  return (
    <EntityHeader
      category='offers'
      description={title}
      edit={<EditOffer />}
      id={TestCondition.id}
      title={profit}
      titleSize={24}
    />
  );
};
