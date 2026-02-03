import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntreeSortieListRelationFilter } from "../entreeSortie/EntreeSortieListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CollaborateurWhereInput = {
  dateDepart?: DateTimeNullableFilter;
  dateEmbauche?: DateTimeNullableFilter;
  dateEntreePoste?: DateTimeNullableFilter;
  departement?: StringNullableFilter;
  entreeSorties?: EntreeSortieListRelationFilter;
  equipeNPlusUn?: StringNullableFilter;
  id?: StringFilter;
  mailProfessionnel?: StringNullableFilter;
  matriculePaie?: StringNullableFilter;
  nom?: StringNullableFilter;
  numeroTel?: StringNullableFilter;
  poste?: StringNullableFilter;
  prenom?: StringNullableFilter;
  service?: StringNullableFilter;
  siteProduction?: StringNullableFilter;
  teletravail?: BooleanNullableFilter;
  wdId?: StringNullableFilter;
};
