import React from 'react';
import Header from './components/Header';
import "./App.css"
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Formheader from './components/Formheader';
import CenteredTabs from './components/Tabs';
import Question_form from './components/Question_form';
import User_form from './components/user_form';


function App() {
  return (
    <div className = "app">
      <Router>
        <Switch>
          <Route path= "/form/:id">
          <Formheader/>
          <CenteredTabs/>
          
          </Route>

          <Route path="/response">
            <user_form/>
          </Route>

          <Route path= "/">
            <Header/>
            <Template/>
            <Mainbody/>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
