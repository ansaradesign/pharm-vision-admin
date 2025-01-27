import { FormEvent, forwardRef, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/react';

import { IOffer, TProfitType } from '../../model';

import { LabelLayout } from '@/src/shared/ui/layouts/label-layout';

interface Props extends Partial<IOffer> {
  promotions?: {
    key: string;
    title: string;
  }[];
  products?: {
    key: string;
    title: string;
  }[];
  formSubmit: (offer: Partial<IOffer>) => void;
}

export const OfferForm = forwardRef<HTMLFormElement, Props>(
  ({ formSubmit, profit: initialProfit, profitType: initialProfitType }, ref) => {
    const [profit, setProfit] = useState(initialProfit);
    const [profitType, setProfitType] = useState<TProfitType>();
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      formSubmit({});
    };

    return (
      <form ref={ref} className='flex flex-col gap-2' onSubmit={onSubmit}>
        <LabelLayout title='Кэшбек'>
          <Input
            placeholder={'30'}
            type='number'
            value={profit?.toString()}
            onChange={(e) => setProfit(parseInt(e.target.value, 10))}
          />
        </LabelLayout>
        <LabelLayout title='Тип кэшбека'>
          <Select
            defaultSelectedKeys={[initialProfitType || 'static']}
            onSelectionChange={(key) => setProfitType(key.currentKey as TProfitType)}
          >
            <SelectItem key={'static'}>Статичный</SelectItem>
            <SelectItem key={'from'} />
          </Select>
        </LabelLayout>
      </form>
    );
  },
);
