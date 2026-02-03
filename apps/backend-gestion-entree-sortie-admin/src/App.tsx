import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CollaborateurList } from "./collaborateur/CollaborateurList";
import { CollaborateurCreate } from "./collaborateur/CollaborateurCreate";
import { CollaborateurEdit } from "./collaborateur/CollaborateurEdit";
import { CollaborateurShow } from "./collaborateur/CollaborateurShow";
import { EntreeSortieList } from "./entreeSortie/EntreeSortieList";
import { EntreeSortieCreate } from "./entreeSortie/EntreeSortieCreate";
import { EntreeSortieEdit } from "./entreeSortie/EntreeSortieEdit";
import { EntreeSortieShow } from "./entreeSortie/EntreeSortieShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BackendGestionEntreeSortie"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Collaborateur"
          list={CollaborateurList}
          edit={CollaborateurEdit}
          create={CollaborateurCreate}
          show={CollaborateurShow}
        />
        <Resource
          name="EntreeSortie"
          list={EntreeSortieList}
          edit={EntreeSortieEdit}
          create={EntreeSortieCreate}
          show={EntreeSortieShow}
        />
      </Admin>
    </div>
  );
};

export default App;
