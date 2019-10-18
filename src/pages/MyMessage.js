import React from 'react';
import { useRouteMatch, params, match } from 'react-router-dom';

import jsonTemplates from '../data/templates';
import Canvas from '../components/Canvas';

class MyMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: jsonTemplates,
            myTemplate: this.props.match.params.id,
            text: '',
            bubbleText: 'Your text here'
        };
        console.log(this.props.match.params.id);
        console.log(this.state.templates)
    }

    handleInput = (e) => {
        var text = e.target.value;

        this.setState({ text: text })
        // console.log(this.state.text);
    }
    handleClick
        = (e) => {
            e.preventDefault();
            this.setState({
                text: "",
                bubbleText: this.state.text
            })
        }
    render() {
        const { myTemplate, templates } = this.state;
        let selectedTemp = templates.find((temp) => {
            if (temp.title == myTemplate) {
                return temp;
            }
        })

        return (
            <div>
                {/* <img src = {selectedTemp.src}/> */}
                shalom {selectedTemp.title}
                <Canvas canvastext={this.state.bubbleText} imgSrc={selectedTemp.src} />
                <textarea rows="3" cols="25" onChange={this.handleInput} value={this.state.text} style={{ fontFamily: "Arial" }} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default MyMessage;