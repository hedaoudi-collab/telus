import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COLLABORATEUR_TITLE_FIELD } from "../collaborateur/CollaborateurTitle";

export const EntreeSortieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
