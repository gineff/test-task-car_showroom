import { sortMapping } from "../config";

export const getCurrentOption = (sort: string, _order: string) => {
  return sortMapping[sort]?.[_order];
};
