import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import UserGallery from './pages/UserGallery';
import Templates from './pages/Templates';
import jsonTemplates from './data/templates';
import MyMessage from './pages/MyMessage';
import userImages from './data/userimages';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      templates: jsonTemplates,
      userImages: userImages,
      newImages: {}
    }
  }
  addUserImage = (image, username) => {
    const authorname = this.state.newImages.author;
    const imgData = this.state.newImages.image;
    const newPic = {
      author: authorname,
      pic: imgData
    }
    this.setState({ newImages: this.newImages.concat(newPic) })
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
          <UserGallery userImages={this.state.userImages} newImages = {this.state.newImages} />
        </Route>
        <Route exact path="/templates">
          <Templates templates={this.state.templates} />
        </Route>
        {/* <Route exact path="/templates/:id"
         component={MyMessage}
          render={( match ) => (
           match = { match }  ) } /> */}
         <Route exact path="/templates/:id" render = {props => <MyMessage {...props} addUserImage = {this.addUserImage}/>} /> 
         



      </Container>
    );
  }
}
export default App;
