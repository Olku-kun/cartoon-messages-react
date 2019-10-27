import React from 'react';


class MyPicture extends React.Component {
    
    render() {
        const picture = this.props.picture;
        return(
            <div  className='m-2'>
            <img className = "gallery-img" src={picture.image} title={picture.author} alt={picture.alt} />
        </div>
        )
    }
}
export default MyPicture