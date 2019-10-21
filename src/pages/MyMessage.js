import React from 'react';
import { useRouteMatch, params, match } from 'react-router-dom';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
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
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            text: "",
            bubbleText: this.state.text
        })
    }
    deleteMessage = (e) => {
        e.preventDefault();
        this.setState({
            text: "",
            bubbleText: ""
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
            <Container>
                {/* <img src = {selectedTemp.src}/> */}
                shalom {selectedTemp.title}
                <div  className="mx-auto" style={{width:"500px"}}>
                <Canvas canvastext={this.state.bubbleText} imgSrc={selectedTemp.src} />
                <textarea rows="3" cols="25" onChange={this.handleInput} value={this.state.text} style={{ fontFamily: "Arial" }} maxlength="75" />
                {/* <button onClick={this.handleClick}>Submit</button> */}
                <ButtonToolbar>
                    <Button className="mr-2" variant="success" size="sm" onClick={this.handleClick} >
                        Submit
  </Button>
                    <Button className="mr-2" variant="info" size="sm">
                        Download
    </Button>
                    <Button className="mr-2" variant="danger" size="sm" onClick={this.deleteMessage}>
                        Clear
    </Button>
                </ButtonToolbar>
                </div>
            </Container>
        )
    }
}

export default MyMessage;