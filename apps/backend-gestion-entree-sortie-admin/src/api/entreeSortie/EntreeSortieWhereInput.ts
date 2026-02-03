import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollaborateurWhereUniqueInput } from "../collaborateur/CollaborateurWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EntreeSortieWhereInput = {
  badgeTemporaire?: StringNullableFilter;
  collaborateur?: CollaborateurWhereUniqueInput;
  dateHeureEntree?: DateTimeNullableFilter;
  id?: StringFilter;
};
