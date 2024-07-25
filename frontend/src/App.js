import * as React from "react";
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import { UtilisateurList, UtilisateurEdit, UtilisateurCreate } from './resources/utilisateurs';
import { ContratList, ContratEdit, ContratCreate } from './resources/contrats';
import { QuittanceList, QuittanceEdit, QuittanceCreate } from './resources/quittances';
import { TransactionList, TransactionEdit, TransactionCreate } from './resources/transactions';
import { MoyenDePaiementList, MoyenDePaiementEdit, MoyenDePaiementCreate } from './resources/moyenDePaiements';

const dataProvider = restProvider('http://localhost:8080/api');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} title="QuittanceSwift">
      <Resource name="utilisateurs" list={UtilisateurList} edit={UtilisateurEdit} create={UtilisateurCreate} />
      <Resource name="contrats" list={ContratList} edit={ContratEdit} create={ContratCreate} />
      <Resource name="quittances" list={QuittanceList} edit={QuittanceEdit} create={QuittanceCreate} />
      <Resource name="transactions" list={TransactionList} edit={TransactionEdit} create={TransactionCreate} />
      <Resource name="moyenDePaiements" list={MoyenDePaiementList} edit={MoyenDePaiementEdit} create={MoyenDePaiementCreate} />
    </Admin>
);

export default App;
