import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
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
            image: "",
            username: undefined

        };

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
    addUserImage = (image, username) => {

        this.props.addUserImage(image, username);
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
                <Row>

                    <Col sm={3}>
                        <ul><h4>Instructions</h4>
                            <li>Enter you message to the text box (limit 85 characters)</li>
                            <li>Click submit button to add you message to the template</li>
                            <li>Click download button to save your cartoon message</li>
                            <li>Enter your nickname and submit your image to User Gallery</li>
                        </ul>
                        <div>
                            <h4 style = {{color: "tomato"}}>Type your message:</h4>
                            <span className="m-2" style={{ color: "gray", fontSize: "0.7em" }}>Characters left: {85 - this.state.text.length}</span>
                        </div>
                        <textarea className="m-2" rows="3" cols="25" placeholder="...type here" onChange={this.handleInput} value={this.state.text} style={{ fontFamily: "Arial" }} maxLength="85" />


                        <ButtonToolbar className="d-flex justify-content-start">
                            <Button className="m-2" variant="success" size="sm" onClick={this.handleClick} >
                                Submit
  </Button>
                            <Button className="m-2" variant="danger" size="sm" onClick={this.deleteMessage}>
                                Clear
    </Button>
                        </ButtonToolbar></Col>


                    <Col sm={9}>
                        <div >
                            <Canvas canvastext={this.state.bubbleText} x={selectedTemp.x} y={selectedTemp.y} imgSrc={selectedTemp.src} addUserImage={this.addUserImage} />
                        </div>
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default MyMessage;