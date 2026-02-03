import { CollaborateurWhereUniqueInput } from "../collaborateur/CollaborateurWhereUniqueInput";

export type EntreeSortieCreateInput = {
  badgeTemporaire?: string | null;
  collaborateur?: CollaborateurWhereUniqueInput | null;
  dateHeureEntree?: Date | null;
};
