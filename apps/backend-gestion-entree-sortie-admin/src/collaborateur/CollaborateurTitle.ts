import { Collaborateur as TCollaborateur } from "../api/collaborateur/Collaborateur";

export const COLLABORATEUR_TITLE_FIELD = "departement";

export const CollaborateurTitle = (record: TCollaborateur): string => {
  return record.departement?.toString() || String(record.id);
};
