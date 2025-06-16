export const SORT_VALUES = {
  CHEAP: 'cheap',
  EXPENSIVE: 'expensive',
};

export const selectOptions = [
  { value: SORT_VALUES.CHEAP, label: 'Сначала недорогие' },
  { value: SORT_VALUES.EXPENSIVE, label: 'Сначала подороже' },
];

export type PriceOptions = 'cheap' | 'expensive';

export const sortMapping: Record<string, Record<string, string>> = {
  price: {
    asc: SORT_VALUES.CHEAP,
    desc: SORT_VALUES.EXPENSIVE,
  },
};
