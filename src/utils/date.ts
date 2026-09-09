export const parseSiteDate = (dateStr: string): Date => {
  const dateOnlyMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);

  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return new Date(dateStr);
};

export const formatSiteDate = (
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
): string => parseSiteDate(dateStr).toLocaleDateString('en-US', options);

export const getSiteDateYear = (dateStr: string): number => parseSiteDate(dateStr).getFullYear();
