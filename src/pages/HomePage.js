import React from 'react';

import { Container, Button } from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (

            <Container>
                <div>
                <h1>Steps to create your cartoon message </h1>
                <ul>
                    <li>Choose your favorite template from the <a href="#/templates" target="_blank">Template Gallery</a></li>
                    <li>Enter your message to the text input field</li>
                    <li>Save your new cartoon message image to your computer or/and add it to our <a href="#/gallery" target="_blank">User Gallery</a></li>
                </ul>
                <Button variant="primary" size="lg" active href="#/templates">Start</Button>
                </div>  
                
            </Container>

        )
    }
}

export default HomePage;
