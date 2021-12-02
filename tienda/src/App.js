import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import { Client } from './components/rutas/Client'
import { Product } from './components/rutas/Product'
import { Report } from './components/rutas/Report'
import { LoginPanel } from './components/rutas/LoginPanel'
import { Sales } from './components/rutas/Sales'
import { Createclient } from './components/rutas/Createclient'
import { ModificateClient } from './components/rutas/ModificateClient';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/clientes" component={Client} />
          <Route path="/productos" component={Product} />
          <Route path="/reportes" component={Report} />
          <Route path="/Login" component={LoginPanel} />
          <Route path="/ventas" component={Sales} />
          <Route path="/crear" component={Createclient} />
          <Route path="/editar" component={ModificateClient} />

          <LoginPanel/>


        </Switch>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;