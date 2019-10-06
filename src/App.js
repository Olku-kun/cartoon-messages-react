import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import UserGallery from './pages/UserGallery';
import Templates from './pages/Templates';


function App() {
  return (
    <Container>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/gallery">
          <UserGallery />
        </Route>
        <Route exact path="/templates">
          <Templates />
        </Route>
      </Switch>

    </Container>
  );
}

export default App;
