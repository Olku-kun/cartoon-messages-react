import React from 'react';
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
            if (temp.title === myTemplate) {
                return temp;
            }
        })

        return (
            <Container className="base">

                shalom {selectedTemp.title}{this.props.stam}
                <div>
                    <Canvas canvastext={this.state.bubbleText} x={selectedTemp.x} y={selectedTemp.y} imgSrc={selectedTemp.src} />
                    <div >
                        <textarea className="m-4"  rows="3" cols="25" onChange={this.handleInput} value={this.state.text} style={{ fontFamily: "Arial" }} maxLength="120" />
                    </div>

                    <ButtonToolbar className ="d-flex justify-content-start">
                        <Button className="m-2" variant="success" size="sm" onClick={this.handleClick} >
                            Submit
  </Button>
                        <Button className="m-2" variant="danger" size="sm" onClick={this.deleteMessage}>
                            Clear
    </Button>
                    </ButtonToolbar>
                </div>
            </Container>
        )
    }
}

export default MyMessage;