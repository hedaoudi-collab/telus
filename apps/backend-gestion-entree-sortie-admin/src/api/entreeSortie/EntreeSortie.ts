import { Collaborateur } from "../collaborateur/Collaborateur";

export type EntreeSortie = {
  badgeTemporaire: string | null;
  collaborateur?: Collaborateur | null;
  createdAt: Date;
  dateHeureEntree: Date | null;
  id: string;
  updatedAt: Date;
};
