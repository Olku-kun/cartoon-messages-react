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
            bubbleText: 'Your text here',

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

                shalom {selectedTemp.title}
                <div className="mx-auto" style={{ width: "300px" }}>
                    <Canvas canvastext={this.state.bubbleText} x = {selectedTemp.x} y = {selectedTemp.y} imgSrc={selectedTemp.src} />
                    <div className="d-flex justify-content-center">
                        <textarea className = "m-4" wrap="hard" rows="3" cols="25" onChange={this.handleInput} value={this.state.text} style={{ fontFamily: "Arial" }} maxLength="75" />
                    </div>
                    <ButtonToolbar>
                        <Button className="mr-2" variant="success" size="lg" onClick={this.handleClick} >
                            Submit
  </Button>

                        <Button className="ml-auto" variant="danger" size="lg" onClick={this.deleteMessage}>
                            Clear
    </Button>
                    </ButtonToolbar>
                </div>
            </Container>
        )
    }
}

export default MyMessage;