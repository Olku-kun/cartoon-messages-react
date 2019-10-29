import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.canvas = React.createRef();
        this.state = {
            author: "",
            image: "",
            lgShow: false,
        }
        this.message = this.message.bind(this)
    }
    componentDidMount() {
        this.message()
    }
    componentDidUpdate() {
        this.message()
    }
    message() {
        const img = this.image.current;
        const canvas = this.canvas.current;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0);
        const maxWidth = 180;
        const lineHeight = 21;
        var x = parseInt(this.props.x);
        var y = parseInt(this.props.y);

        ctx.fillStyle = "#333";
        ctx.font = "25px Caveat";
        const text = this.props.canvastext;
        this.wrapText(ctx, lineHeight, maxWidth, x, y, text);
    }
    wrapText = (ctx, lineHeight, maxWidth, x, y, text) => {

        var words = text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }

    downloadImg = (e) => {
        var canvas = this.canvas.current;
        var image = canvas.toDataURL('image/jpg');
        e.target.href = image;

        this.setState({ image });
    }
    handleChange = (e) => {
        const author = e.target.value;
        this.setState({ author })
    }

    handleSubmit = () => {
        var canvas = this.canvas.current;
        var image = canvas.toDataURL('image/jpg');
        var username = this.state.author;
        this.props.addUserImage(image, username);
        this.setState({ LgShow: true })

    }

    render() {

        return (
            <Container>
                <Row>
                    <Col ><div>
                        <canvas ref={this.canvas}
                            width={400}
                            height={400}
                        />
                        <a className="download-btn rounded" variant="secondary" download="image.jpg" href="#" onClick={this.downloadImg} crossOrigin="anonymous" alt="" >Download</a>
                        <img ref={this.image} src={this.props.imgSrc} alt="" style={{ display: 'none' }} />
                    </div>
                    </Col>
                    <Col >
                        <div className="submitting-block">
                            <h4 className="m-3">Enter your name</h4>
                            <input className="m-3" type="text"  value={this.state.author} onChange={this.handleChange} />
                            <Button className="m-3" variant="success" size="lg" type="button" onClick={this.handleSubmit}>Submit to Gallery</Button>
                        </div>

                    </Col>
                </Row>
                <Modal  size="lg" show={this.state.LgShow} onHide={() => this.setState({ LgShow: false })}
                    aria-labelledby="example-modal-sizes-title-lg" >
                    <Modal.Header closeButton className = "mymodal">
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Your Message was added to the User Gallery
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className = "mymodal"><a href="#/gallery">Go to the User Gallery</a></Modal.Body>
                </Modal>
            </Container>

        )
    }
}
export default Canvas