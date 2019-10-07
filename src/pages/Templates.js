import React from 'react';
import Tile from '../components/Tile'
import {  Container, Row, Col } from 'react-bootstrap';

class Templates extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const templates =  this.props.templates;
        const tiles = templates.map(tile => <Col key={tile.id} lg = "3" md = "6"><Tile templates = {templates}/></Col>)
        return (
             <Container>
               <h1>Choose your tamplate</h1>
               <Row>{tiles} </Row>
                </Container>
           
        )
    }
}

export default Templates;
