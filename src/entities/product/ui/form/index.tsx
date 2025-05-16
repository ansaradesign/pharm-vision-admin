import { FormEvent, forwardRef, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Checkbox, Select, SelectItem } from '@nextui-org/react';

import { IProduct, TCashbackType } from '../../model';

import { LabelLayout } from '@/src/shared/ui/layouts/label-layout';
import { Flex } from '@/src/shared/ui/primitives/flex';

interface Props extends Partial<IProduct> {
  promotions?: {
    key: string;
    title: string;
  }[];
  brands?: {
    key: string;
    title: string;
  }[];
  formSubmit: (product: Partial<IProduct>) => void;
}

export const ProductForm = forwardRef<HTMLFormElement, Props>(
  (
    {
      name: initialName,
      sku: initialSku,
      fixCashback: initialFixCashback,
      cashbackType: initialCashbackType,
      formSubmit,
    },
    ref,
  ) => {
    const [name, setName] = useState(initialName);
    const [sku, setSku] = useState(initialSku);
    const [isFixCashback, setIsFixCashback] = useState(!!initialFixCashback);
    const [fixCashback, setFixCashback] = useState(initialFixCashback);
    const [cashbackType, setCashbackType] = useState<TCashbackType>();

    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      formSubmit({ name, sku, fixCashback, cashbackType });
    };

    return (
      <form ref={ref} className='flex flex-col gap-2' onSubmit={onSubmit}>
        <LabelLayout title='Название'>
          <Input
            placeholder='Дигестол повязка 10х10х5мм'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </LabelLayout>
        <LabelLayout title='sku'>
          <Input placeholder='1a1a1a' value={sku} onChange={(e) => setSku(e.target.value)} />
        </LabelLayout>
        <Flex className='my-2'>
          <Checkbox
            isSelected={isFixCashback}
            onChange={(e) => setIsFixCashback(e.target.checked)}
          />
          <button className='-ml-4 opacity-50' onClick={() => setIsFixCashback((prev) => !prev)}>
            Добавить фиксированный кешбэк
          </button>
        </Flex>
        {isFixCashback && (
          <Flex>
            <Input
              placeholder={'30'}
              type='number'
              value={fixCashback?.toString()}
              onChange={(e) => setFixCashback(parseInt(e.target.value, 10))}
            />
            <Select
              defaultSelectedKeys={[initialCashbackType || 'percent']}
              onSelectionChange={(key) => setCashbackType(key.currentKey as TCashbackType)}
            >
              <SelectItem key={'percent'}>%</SelectItem>
              <SelectItem key={'amount'}>₽</SelectItem>
            </Select>
          </Flex>
        )}
        <button className='hidden' type='submit' />
      </form>
    );
  },
);
