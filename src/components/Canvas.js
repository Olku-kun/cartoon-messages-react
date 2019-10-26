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
        const img = this.image.current;
        const canvas = this.canvas.current;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(img, 0, 0);
        const maxWidth = 190;
        const lineHeight = 20;
        var x = parseInt(this.props.x);
        var y =parseInt(this.props.y);
       
        ctx.fillStyle = "#333";
        ctx.font = "24px Caveat";
        const text = this.props.canvastext;
        this.wrapText(ctx, lineHeight, maxWidth, x, y, text);
    }
    wrapText = (ctx, lineHeight, maxWidth, x, y, text)=>{
        
        var words = text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n>0) {
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
                            onClick={e => {
                               //temporary function to get coordinates
                    console.log(e.clientX, e.clientY)          }}
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