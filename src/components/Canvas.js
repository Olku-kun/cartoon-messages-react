import React from 'react';
import { Button } from 'react-bootstrap';
class Canvas extends React.Component {
    constructor(props) {
        super(props);
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
        console.log(typeof image);
        console.log(image);

    }
    render() {

        return (
            <div>
                <a className=" mb-2" variant="secondary" download="image.jpg" href="#" onClick={this.downloadImg} crossOrigin="anonymous" alt="" size="lg">Download </a>

                <canvas ref={this.canvas}
                    width={300}
                    height={300}
                />

                <img ref={this.image} src={this.props.imgSrc} alt = "" style={{ display: 'none' }} />


            </div>

        )
    }
}
export default Canvas