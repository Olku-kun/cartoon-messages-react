import React from 'react';
class Canvas extends React.Component {
    constructor(props) {
      super(props);
      this.image = React.createRef();
      this.message - this.message.bind(this)
    }
    componentDidMount() {
      this.message()
    }
    componentDidUpdate() {
      this.message()
    }
    message() {
      console.log(this.props);
      // const { text } = this.props;
      const img = this.image.current;
      const ctx = this.refs.canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = "tomato"
      ctx.font = "18px Mansalva"
     
      ctx.fillText(this.props.canvastext, 150, 50)
    }
    render() {
       
        return (
          <div>
            <canvas ref='canvas'
              width={300}
              height={300}
            />
    
    
    
            <img ref={this.image} src="https://i.ibb.co/12WjwTf/mockup-test.png" className="hidden" />
            
          </div>
    
        )
      }
    }