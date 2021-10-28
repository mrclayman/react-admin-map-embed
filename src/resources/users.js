import * as React from "react";
import { Edit, FormTab, List, Datagrid, TabbedForm, TextField, TextInput } from 'react-admin';
import Map from "../components/map";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="General">
        <TextField source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <Map label="User location" marker={[37.0154036, -7.9326658]} />
      </FormTab>
      <FormTab label="location">
        <Map label="User location" marker={[37.0154036, -7.9326658]} />
      </FormTab>
    </TabbedForm>
  </Edit>
)