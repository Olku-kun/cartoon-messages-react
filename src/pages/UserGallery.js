import React from 'react';
import userImages from '../data/userimages';
import {  Container, Col, Row } from 'react-bootstrap';
import MyPicture from '../components/MyPicture';

class UserGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: this.props.userImages
        }
    }
    render() {
        const {pictures} = this.state;
        const mypictures = pictures.map((pic, i) => <Col  key = {i}  lg="4" md="6" sm="1"><h4>{pic.author}</h4><MyPicture picture={pic} /></Col>);
        return (
            
                <Container className = "base">
              <Row>{mypictures}</Row>
                </Container>
           
        )
    }
}

export default UserGallery;
