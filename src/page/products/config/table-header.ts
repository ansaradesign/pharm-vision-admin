export const TableHeaderConst = [
  { key: 'id', allowsSorting: false, title: 'id' },
  { key: 'name', allowsSorting: false, title: 'Название' },
  {
    key: 'sku',
    allowsSorting: false,
    title: 'SKU',
  },
  {
    key: 'fixCashback',
    allowsSorting: true,
    title: 'Фиксированный кэшбэк',
  },
  {
    key: 'offers_amount',
    allowsSorting: true,
    title: 'Кол-во спец-предложения',
  },
  { key: 'receipts_amount', allowsSorting: true, title: 'Кол-во чеков' },
  {
    key: 'cashback_amount',
    allowsSorting: true,
    title: 'Сумма начисленного кешбэка',
  },
  { key: 'createdAt', allowsSorting: true, title: 'Дата создания' },
];
