import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COLLABORATEUR_TITLE_FIELD } from "./CollaborateurTitle";

export const CollaborateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateDepart" source="dateDepart" />
        <TextField label="DateEmbauche" source="dateEmbauche" />
        <TextField label="DateEntreePoste" source="dateEntreePoste" />
        <TextField label="Departement" source="departement" />
        <TextField label="EquipeNPlusUn" source="equipeNPlusUn" />
        <TextField label="ID" source="id" />
        <TextField label="MailProfessionnel" source="mailProfessionnel" />
        <TextField label="MatriculePaie" source="matriculePaie" />
        <TextField label="Nom" source="nom" />
        <TextField label="NumeroTel" source="numeroTel" />
        <TextField label="Poste" source="poste" />
        <TextField label="Prenom" source="prenom" />
        <TextField label="Service" source="service" />
        <TextField label="SiteProduction" source="siteProduction" />
        <BooleanField label="Teletravail" source="teletravail" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WdId" source="wdId" />
        <ReferenceManyField
          reference="EntreeSortie"
          target="collaborateurId"
          label="EntreeSorties"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="BadgeTemporaire" source="badgeTemporaire" />
            <ReferenceField
              label="Collaborateur"
              source="collaborateur.id"
              reference="Collaborateur"
            >
              <TextField source={COLLABORATEUR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateHeureEntree" source="dateHeureEntree" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
