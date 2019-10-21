import React from 'react';
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
        console.log(this.props);
        const canvas = this.canvas.current
        const img = this.image.current;
        const ctx = canvas.getContext("2d");
        // src="https://i.ibb.co/12WjwTf/mockup-test.png";
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "tomato"
        ctx.font = "18px Mansalva"

        ctx.fillText(this.props.canvastext, 150, 50)
    }
    downloadImg = (el)=> {
        var canvas = this.canvas.current;
        var image = canvas.toDataURL('image/png');
        el.href = image;
        console.log(image)
        
      }
    render() {

        return (
            <div>
                <canvas ref={this.canvas}
                    width={300}
                    height={300}
                />

                <img ref={this.image} src={this.props.imgSrc} style={{ display: 'none' }} />
                <a download = "image.png" href="" onClick={this.downloadImg} crossOrigin="Anonymous">Download </a>

            </div>

        )
    }
}
export default Canvas