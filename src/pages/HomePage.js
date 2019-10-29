import React from 'react';

import { Container, Button, Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (

            <Container className = "base">
                <Row>
                    <Col className="steps" sm={6}>
                <h2 className = "mb-5">Steps to create your cartoon message </h2>
                
                <ol>
                    <li>Choose your favorite template from the <a href="#/templates" target="_blank">Template Gallery</a> </li>
                    
                    <li>Enter your message to the text input field
                   
                    </li>
                    <li>Save your new cartoon message image to your computer or/and add it to our <a href="#/gallery" target="_blank">User Gallery</a>
                   </li>
                </ol>
                <Button variant="success" size="lg" active href="#/templates">Start</Button>
                </Col>
                <Col sm={6}>
                <img src = "siteimages/step1.png" alt=""/>
                <img src = "siteimages/step2.png" alt=""/>
                <img src = "siteimages/step3.png" alt=""/>
                </Col>
               </Row>  
                
            </Container>

        )
    }
}

export default HomePage;
