import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Accueil from './pages/Accueil';
import Destination from './pages/Destination';
import Technologie from './pages/Technologie';
import Planete from './pages/Planete';

import Administration from './pages/admin/dashboard'
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription'
import Profil from './pages/Profil/Profil';
import Profil_Reservation from './pages/Profil/Reservation';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>

      <Route path="/" exact component={Accueil}/>
      <Route path='/destination' exact component={Destination}/>
      <Route path="/Technologie" exact component={Technologie}/>
      <Route path="/destination/planete" exact component={Planete}/>

      <Route path="/dashboard" exact component={Administration}/>
      <Route path="/connexion" exact component={Connexion}/>
      <Route path="/inscription" exact component={Inscription}/>
      <Route path="/profil" exact component={Profil}/>
      <Route path="/profil/reservation" exact component={Profil_Reservation}/>
      
      
    </Switch>
    </BrowserRouter>
  );
};

export default App;