import './App.css';
import { PopupContextProvider } from './context/popup';
import Router from './routes/routes';
import React from "react";

function App() {
  return ( 
    <PopupContextProvider>
      <Router/>
    </PopupContextProvider>
  )
}

export default App;
