import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.author = React.createRef();
        this.image = React.createRef();
        this.canvas = React.createRef();
        this.message = this.message.bind(this)
    }
    componentDidMount() {
        this.message()
    }
    componentDidUpdate() {
        this.message()
    }
    message() {
        const { x, y } = this.props;
        const canvas = this.canvas.current;
        const img = this.image.current;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "#333";
        ctx.font = "18px Mansalva";

        ctx.fillText(this.props.canvastext, x, y)
    }

    // wrapText(x, y, z) {

    // }


    downloadImg = (e) => {
        var canvas = this.canvas.current;
        var image = canvas.toDataURL('image/jpg');
        e.target.href = image;
        console.log(image);

    }
    render() {

        return (
            <Container>
                <Row>
                    <Col >
                        <canvas ref={this.canvas}
                            width={400}
                            height={400}
                        />
                    </Col>
                    <Col >
                        <h4>Enter your name</h4>
                        <input type="text" placeholder="Anonymous" ref={this.author} />
                        <a className=" mb-2" variant="secondary" download="image.jpg" href="#" onClick={this.downloadImg} crossOrigin="anonymous" alt="" size="lg"><h4>Download </h4></a>
                        <img ref={this.image} src={this.props.imgSrc} alt="" style={{ display: 'none' }} />
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Canvas