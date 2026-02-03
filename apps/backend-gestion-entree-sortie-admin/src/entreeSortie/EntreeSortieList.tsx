import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLABORATEUR_TITLE_FIELD } from "../collaborateur/CollaborateurTitle";

export const EntreeSortieList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EntreeSorties"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
