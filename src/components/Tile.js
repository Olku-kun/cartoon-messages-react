import React from 'react';

import {  Container, Row } from 'react-bootstrap';

class Tile extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       const templates =  this.props.templates;
       const tiles = templates.map(tile => <Col key={tile.id} lg = "3" md = "6">)
        return (
             <div>
                 </div>
           
        )
    }
}

export default Tile;
