import React from 'react';
import { useRouteMatch, params, match } from 'react-router-dom';

import jsonTemplates from '../data/templates';

class MyMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: jsonTemplates,
            myTemplate: this.props.match.params.id
        };
        console.log(this.props.match.params.id);
        console.log(this.state.templates)
    }

// componentDidMount(){
//    var a =  this.props.match.params.id;
//    console.log(this.a)
// }
    render() {
const { myTemplate, templates } = this.state;
let selectedTemp = templates.find ( (temp) =>{
    if(temp.title == myTemplate) {
        return temp;
    }
})

        return (
            <div>
                <img src = {selectedTemp.src}/>
                shalom {selectedTemp.title}
           
            </div>
        )
    }
}

export default MyMessage;