import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CollaborateurTitle } from "../collaborateur/CollaborateurTitle";

export const EntreeSortieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
