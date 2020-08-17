export function sortByDate(a, b) {
  const dateA = new Date(a.created);
  const dateB = new Date(b.created);
  return dateB - dateA;
}
