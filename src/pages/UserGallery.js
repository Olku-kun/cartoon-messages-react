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
        const mypictures = pictures.map((pic, i) => <Col  key = {i}  lg="4" md="6" sm="1"><div className = "imagebox"><h5 className = "username">By {pic.author}</h5><MyPicture picture={pic} /></div></Col>);
        return (
            
                <Container className = "base">
                    <div className = "imagebox">
                    <h5 className = "username">By {this.props.newImage.author}</h5>
                    <img className = "gallery-img" src = {this.props.newImage.pic}/>
                    </div>
              <Row>{mypictures}</Row>
              
                </Container>
           
        )
    }
}

export default UserGallery;
