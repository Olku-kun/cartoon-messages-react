import React from 'react';

import { Mockup } from '../data/mockup/mockup.png';

class Tile extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const templates =  this.props.templates;
        return (
             <div className = 'm-2'>
                 <img src = {Mockup} />
                 </div>
           
        )
    }
}

export default Tile;
