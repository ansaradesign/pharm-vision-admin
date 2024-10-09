import { DateManager } from "@/src/shared/lib/utils/date-manager";

function generateDateValueArray() {
  const month = 9;
  const year = 2024;
  const result = [];
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const formattedDate = date.toISOString().split("T")[0];
    const randomValue = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

    result.push({ date: formattedDate, value: randomValue });
  }

  return result;
}

export const DailyWithdrawalChart = {
  data: generateDateValueArray(),
  description: "Кол-во выводов за день",
  title: "Выводы",
  x: "date",
  y: "value",
  formatX: DateManager.formatDateToStringMonth,
};
