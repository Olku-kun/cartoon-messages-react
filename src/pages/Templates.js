import React from 'react';
import Tile from '../components/Tile'
import { Container, Row, Col } from 'react-bootstrap';

class Templates extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const templates = this.props.templates;

        console.log(templates);
        const tiles = templates.map((template, i) => <Col  key = {i} id={template.title} lg="4" md="6" sm="1"><Tile template={template} /></Col>);
        console.log(tiles);
        return (
            <Container>
                <h1 className="text-center">Choose your template</h1>
                <Row>{tiles} </Row>
            </Container>

        )
    }
}

export default Templates;
