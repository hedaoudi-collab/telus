import { EntreeSortie as TEntreeSortie } from "../api/entreeSortie/EntreeSortie";

export const ENTREESORTIE_TITLE_FIELD = "badgeTemporaire";

export const EntreeSortieTitle = (record: TEntreeSortie): string => {
  return record.badgeTemporaire?.toString() || String(record.id);
};
