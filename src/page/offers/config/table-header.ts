export const TableHeaderConst = [
  { key: 'id', allowsSorting: false, title: 'id' },
  { key: 'cashback', allowsSorting: false, title: 'Кэшбек' },
  {
    key: 'products_amount',
    allowsSorting: true,
    title: 'Кол-во продуктов',
  },
  {
    key: 'receipts_amount',
    allowsSorting: true,
    title: 'Кол-во чеков',
  },
  {
    key: 'conditions',
    allowsSorting: false,
    title: 'Условия',
  },
  {
    key: 'cashback_amount',
    allowsSorting: true,
    title: 'Сумма начисленного кэшбека',
  },
  { key: 'createdAt', allowsSorting: true, title: 'Дата создания' },
  { key: 'endedAt', allowsSorting: true, title: 'Дата окончания' },
];
