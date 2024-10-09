export const TableHeaderConst = [
  { key: 'promotionId', allowsSorting: false, title: 'id' },
  { key: 'name', allowsSorting: false, title: 'Название' },
  { key: 'users_amount', allowsSorting: true, title: 'Кол-во пользователей' },
  {
    key: 'accrued_cashback',
    allowsSorting: true,
    title: 'Сумма начисленного кэшбэка',
  },
  {
    key: 'withdrawn_cashback',
    allowsSorting: true,
    title: 'Сумма выведенного кэшбэка',
  },
  { key: 'receipts_amount', allowsSorting: true, title: 'Кол-во чеков' },
  {
    key: 'waiting_receipts',
    allowsSorting: true,
    title: 'кол-во чеков ожидающих подверждения',
  },
  { key: 'createdAt', allowsSorting: true, title: 'Дата создания' },
];
