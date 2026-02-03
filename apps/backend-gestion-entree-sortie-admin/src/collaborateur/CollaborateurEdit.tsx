import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { EntreeSortieTitle } from "../entreeSortie/EntreeSortieTitle";

export const CollaborateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateDepart" source="dateDepart" />
        <DateTimeInput label="DateEmbauche" source="dateEmbauche" />
        <DateTimeInput label="DateEntreePoste" source="dateEntreePoste" />
        <TextInput label="Departement" source="departement" />
        <ReferenceArrayInput source="entreeSorties" reference="EntreeSortie">
          <SelectArrayInput
            optionText={EntreeSortieTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="EquipeNPlusUn" source="equipeNPlusUn" />
        <TextInput
          label="MailProfessionnel"
          source="mailProfessionnel"
          type="email"
        />
        <TextInput label="MatriculePaie" source="matriculePaie" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="NumeroTel" source="numeroTel" />
        <TextInput label="Poste" source="poste" />
        <TextInput label="Prenom" source="prenom" />
        <TextInput label="Service" source="service" />
        <TextInput label="SiteProduction" source="siteProduction" />
        <BooleanInput label="Teletravail" source="teletravail" />
        <TextInput label="WdId" source="wdId" />
      </SimpleForm>
    </Edit>
  );
};
