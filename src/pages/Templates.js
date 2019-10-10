import React from 'react';
import Tile from '../components/Tile'
import {  Container, Row, Col } from 'react-bootstrap';

class Templates extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const templates1 =  this.props.templates;
        var templates = Array(6).fill(templates1[0]);
        console.log(templates);
        const tiles = templates.map(template => <Col id={template.title} lg = "4" md = "6" sm = "1"><Tile template = {template}/></Col>);
        console.log(tiles);
        return (
             <Container>
               <h1 className= "text-center">Choose your template</h1>
               <Row>{tiles} </Row>
                </Container>
           
        )
    }
}

export default Templates;
