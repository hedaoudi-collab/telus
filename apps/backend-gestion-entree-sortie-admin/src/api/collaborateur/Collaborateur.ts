import { EntreeSortie } from "../entreeSortie/EntreeSortie";

export type Collaborateur = {
  createdAt: Date;
  dateDepart: Date | null;
  dateEmbauche: Date | null;
  dateEntreePoste: Date | null;
  departement: string | null;
  entreeSorties?: Array<EntreeSortie>;
  equipeNPlusUn: string | null;
  id: string;
  mailProfessionnel: string | null;
  matriculePaie: string | null;
  nom: string | null;
  numeroTel: string | null;
  poste: string | null;
  prenom: string | null;
  service: string | null;
  siteProduction: string | null;
  teletravail: boolean | null;
  updatedAt: Date;
  wdId: string | null;
};
