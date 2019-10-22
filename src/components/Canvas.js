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
        // img.origin = 'anonymous';
        // img.src="https://i.ibb.co/12WjwTf/mockup-test.png";
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "tomato"
        ctx.font = "18px Mansalva"

        ctx.fillText(this.props.canvastext, 150, 50)
    }
    downloadImg = (e)=> {
        var canvas = this.canvas.current;
        var image = canvas.toDataURL('image/jpg');
        e.target.href = image;
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
                <a download = "image.jpg" href="" onClick={this.downloadImg} crossOrigin="anonymous">Download </a>

            </div>

        )
    }
}
export default Canvas