import React from 'react';
import {Redirect } from 'react-router-dom';


class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = { navigateToId: null };
        this.openMyMessage = this.openMyMessage.bind(this);
    }
    openMyMessage() {
        
        this.setState ({ navigateToId: 'id' });
        console.log(this.state)
    }
    render() {
        if (this.state.navigateToId != null) {
            return( 
                <Redirect to = {'/templates/' + this.state.navigateToId} />
            )
        } else {
        const template =  this.props.template;
        return (
             <div  onClick = {this.openMyMessage }  id = {template.id} className = 'm-2'>
                 <img src = {template.src} title = {template.title} alt = {template.alt}/>
                 </div>
           
        )
        }
    }
}

export default Tile;
