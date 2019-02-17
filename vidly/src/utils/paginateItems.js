export function paginateItems(items, itemsPerPage, activePage) {
  const to = itemsPerPage * activePage;
  const from = to - itemsPerPage;
  return items.slice(from, to);
}