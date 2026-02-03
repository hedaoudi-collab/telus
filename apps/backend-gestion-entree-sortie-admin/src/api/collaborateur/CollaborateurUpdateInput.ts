import { EntreeSortieUpdateManyWithoutCollaborateursInput } from "./EntreeSortieUpdateManyWithoutCollaborateursInput";

export type CollaborateurUpdateInput = {
  dateDepart?: Date | null;
  dateEmbauche?: Date | null;
  dateEntreePoste?: Date | null;
  departement?: string | null;
  entreeSorties?: EntreeSortieUpdateManyWithoutCollaborateursInput;
  equipeNPlusUn?: string | null;
  mailProfessionnel?: string | null;
  matriculePaie?: string | null;
  nom?: string | null;
  numeroTel?: string | null;
  poste?: string | null;
  prenom?: string | null;
  service?: string | null;
  siteProduction?: string | null;
  teletravail?: boolean | null;
  wdId?: string | null;
};
