import { IOfferCondition } from '../model/offer.type';

import { pluralCreative } from '@/src/shared/lib/utils/plural';
import { NUMBERS_CREATIVE_CASE } from '@/src/shared/model/numbers-creative-case';

interface IOfferValues extends Omit<IOfferCondition, 'variant' | 'type'> {}

export class Condition {
  constructor({ variant, type, ...restProps }: IOfferCondition) {
    this.variant = variant;
    this.type = type;
    this.title = this.createCondition(restProps);
  }

  public title: string;
  private variant: IOfferCondition['variant'];
  private type: IOfferCondition['type'];
  private endOfLine = '';
  private AmountCreativePluralForms = {
    one: 'позиции',
    other: 'позиций',
  };

  private createCondition({ from_value, to_value }: IOfferValues) {
    const fromValue = this.getStringValue(from_value);
    const toValue = this.getStringValue(to_value);

    switch (this.type) {
      case 'from':
        return this.buildFromCondition(fromValue!) + this.endOfLine;
      case 'to':
        return this.buildToCondition(toValue!) + this.endOfLine;
      default:
        return this.buildFromToCondition(fromValue!, toValue!) + this.endOfLine;
    }
  }

  private getStringValue(value: number | undefined) {
    if (!value) return null;
    this.createEndOfLine(value);

    if (this.variant === 'price') return value.toString();

    return `${NUMBERS_CREATIVE_CASE[value as keyof typeof NUMBERS_CREATIVE_CASE]}`;
  }

  private buildFromCondition(stringValue: string) {
    return `От ${stringValue}`;
  }

  private buildToCondition(stringValue: string) {
    return `До ${stringValue}`;
  }

  private buildFromToCondition(fromStringValue: string, toStringValue: string) {
    return `От ${fromStringValue} до ${toStringValue}`;
  }

  private createEndOfLine(value: number | undefined) {
    if (value)
      this.endOfLine = ` ${this.variant === 'amount' ? pluralCreative(value, this.AmountCreativePluralForms) : '₽'} в чеке`;
  }
}
