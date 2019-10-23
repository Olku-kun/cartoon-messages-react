import React from 'react';
import { Container } from 'react-bootstrap';
import {Route, } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import UserGallery from './pages/UserGallery';
import Templates from './pages/Templates';
import jsonTemplates from './data/templates';
import MyMessage from './pages/MyMessage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      templates: jsonTemplates,
      userImages: [],
      newImages: {}
    }
  }
  addUserImage = () => {
    const authorname = this.state.newImages.author;
    const imgData = this.state.newImages.image;
const newPic = { author: authorname,
  pic: imgData}
  this.setState({newImages: this.newImages.push(newPic)})
}
  
  render() {
    console.log(this.state);
    return (
      <Container className="bg-light">
        <MyNavbar />


        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/gallery">
          <UserGallery userImages={this.state.userImages} />
        </Route>
        <Route exact path="/templates">
          <Templates templates={this.state.templates} />
        </Route>
        <Route exact path="/templates/:id" component={MyMessage } render={({
          location,
          match
        }) => (
            match = { match } 
    )} />



      </Container>
    );
  }
}
export default App;
