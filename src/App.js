import React from 'react';
import {Container} from 'react-bootstrap';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage.js';
import UserGallery from './pages/UserGallery.js';
import Templates from './pages/Templates.js';


function App() {
  return (
    <Container>
      <MyNavbar/>
     <Switch>
       {/* <Route path = "/">
         <HomePage/>
       </Route> */}
       <Route path = "/usergallery">
         <UserGallery/>
       </Route>
       <Route path = "/templates">
         <Templates/>
       </Route>
     </Switch>
         {/* <p>
         kuku
        </p> */}
       
      
    </Container>
  );
}

export default App;
