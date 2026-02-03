import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CollaborateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Collaborateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="WdId" source="wdId" />{" "}
      </Datagrid>
    </List>
  );
};
