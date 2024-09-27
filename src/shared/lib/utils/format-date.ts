export const formatDate = (value: string | number | Date) => {
  let date = value;

  if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  }

  return (date as Date).toLocaleDateString("ru-RU", {
    month: "short",
    day: "numeric",
  });
};
