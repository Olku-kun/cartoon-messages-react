import React from 'react';
import jsonTemplates from '../data/templates';
import {  Container } from 'react-bootstrap';

class UserGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: jsonTemplates
        }
    }
    render() {
        const {pictures} = this.state;
        // const pictures = pictures.map((pic, i) => <Col  key = {i} id={pic.title} lg="4" md="6" sm="1"><MyPicture picture={pic} /></Col>);
        return (
            
                <Container className = "base">
               bla bla bla
                </Container>
           
        )
    }
}

export default UserGallery;
