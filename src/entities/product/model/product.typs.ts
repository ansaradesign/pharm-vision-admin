import { IBrand } from '../../brand';

export interface IProduct {
  id: number;
  name: string;
  sku: string;
  fixCashback: number;
  cashbackType: TCashbackType;
}

export interface IFullProduct extends IProduct {
  brand: IBrand;
}

export type TCashbackType = 'percent' | 'amount';
