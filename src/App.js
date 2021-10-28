import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {UserEdit, UserList} from "./resources/users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit}/>
  </Admin>
);

export default App;