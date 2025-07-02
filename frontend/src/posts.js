
export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Убираем всё кроме букв, цифр, пробелов и дефисов
    .replace(/\s+/g, "-"); // Пробелы заменяем на дефисы
}
