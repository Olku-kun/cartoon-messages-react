import React from 'react';


class MyPicture extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const picture = this.props.picture;
        return(
            <div  id={picture.title} className='m-2'>
            <img className = "gallery-img" src={picture.src} title={picture.title} alt={picture.alt} />
        </div>
        )
    }
}
export default MyPicture