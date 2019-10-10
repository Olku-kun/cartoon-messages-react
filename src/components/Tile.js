import React from 'react';



class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = { navigateToId: null };
        this.openMyMessage - this.openMyMessage.bind(this);
    }
    render() {
        const template =  this.props.template;
        return (
             <div id = {template.id} className = 'm-2'>
                 <img src = {template.src} title = {template.title} />
                 </div>
           
        )
    }
}

export default Tile;
