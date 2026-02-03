import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CollaborateurTitle } from "../collaborateur/CollaborateurTitle";

export const EntreeSortieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BadgeTemporaire" source="badgeTemporaire" />
        <ReferenceInput
          source="collaborateur.id"
          reference="Collaborateur"
          label="Collaborateur"
        >
          <SelectInput optionText={CollaborateurTitle} />
        </ReferenceInput>
        <DateTimeInput label="DateHeureEntree" source="dateHeureEntree" />
      </SimpleForm>
    </Create>
  );
};
