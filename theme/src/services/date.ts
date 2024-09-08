export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

export function ShortDate(date: string, itemprop: string = ''): string {
  return `<time datetime="${date}" ${itemprop ? `itemprop="${itemprop}"` : ''}>${formatDate(date)}</time>`;
}

export function DateTime(date: string, itemprop: string = ''): string {
  const datetime = new Date(date).toLocaleString();
  return `<time datetime="${date}" ${itemprop ? `itemprop="${itemprop}"` : ''}>${datetime}</time>`;
}
