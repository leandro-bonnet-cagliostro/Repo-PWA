import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import {Button} from "primereact/button";
import friterieService from './core/services/friterieService';
import Friteries from './components/friteries';

function App() {
  // useEffect(() => { // fct qui retourne une fct à l'initialisation du composant
  //   // Au chargement de mon composant
  //   console.log('Je me charge');
  //   friterieService.getAll().then(value => console.log(value))
  //   //console.log(friterieService.getAll());
  //   return () => {
  //     console.log('Je me décharge');
  //   };
  // }, [])// [] = tableau des dépendances et se charge à chaque changement des composants
  // return (
  //   <div className="App">
  //     {/* <Button label="Test du style PrimeReact"/> */}
  //   </div>
  // );
  return (
    <div>
      <Friteries/>
    </div>
  );
}

export default App;
