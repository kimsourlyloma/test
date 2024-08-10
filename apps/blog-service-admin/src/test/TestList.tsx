import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Related Post" source="relatedPost" />
        <TextField label="Status" source="status" />
        <TextField label="test" source="test" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
