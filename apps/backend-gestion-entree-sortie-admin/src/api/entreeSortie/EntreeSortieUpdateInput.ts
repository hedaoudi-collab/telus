import { CollaborateurWhereUniqueInput } from "../collaborateur/CollaborateurWhereUniqueInput";

export type EntreeSortieUpdateInput = {
  badgeTemporaire?: string | null;
  collaborateur?: CollaborateurWhereUniqueInput | null;
  dateHeureEntree?: Date | null;
};
