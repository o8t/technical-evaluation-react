import React, {useEffect} from "react";
import { Router as BrowserRouter } from "react-router-dom";
import { routes } from "./router/config";
import Router from "./router/Router";
import history from "./utils/history";
import 'bootstrap/dist/css/bootstrap.css'
import {clowns} from "./utils/data";


function App() {

    useEffect(()=>{
        if(!localStorage.getItem("clowns"))
            localStorage.setItem("clowns",JSON.stringify(clowns));
    },[])

  return (
      <BrowserRouter history={history}>
        <Router routes={routes} />
      </BrowserRouter>
  );
}

export default App;
