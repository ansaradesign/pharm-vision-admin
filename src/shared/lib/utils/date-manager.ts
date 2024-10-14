export class DateManager extends Date {
  public static getDateWithoutTime(date?: Date) {
    let newDate = new Date();

    if (date) {
      newDate = new Date(date.getTime());
    }

    newDate.setHours(0, 0, 0, 0);

    return newDate;
  }

  public static formatDateToStringMonth(value: string | number | Date) {
    let date = DateManager.toDate(value);

    return date.toLocaleDateString('ru-RU', {
      month: 'short',
      day: 'numeric',
    });
  }

  public static toDate(value: string | number | Date) {
    const date = value instanceof Date ? value : new Date(value);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date value');
    }

    return date;
  }
}
