import React, {useState} from "react";
import ScreenHeading from "../../utilities/SubHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollservice";
import Animations from "../../utilities/animations";
import "./resume.css";
import {Container, Row, Col, Card} from "react-bootstrap";
import AIStudy from "../../assets/Resume/AIStudy.jpg";
import WWEImage from "../../assets/Resume/WWE.jpg";
import MusicImage from "../../assets/Resume/Music.jpg";
import BooksImage from "../../assets/Resume/Books.png";
import Meme from "../../assets/Resume/Meme.jpg";
import JoblyImage from "../../assets/Resume/Jobly.png";


const Resume = (props) => {
    const fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return(
        <div className="resume-container screen-container" id={props.id || ""}>      
            <ScreenHeading title={"Resume"} subHeading={"Experience"} />
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={AIStudy} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">AI Study</Card.Title>
                                <Card.Text>
                                    AI-Study is a platform dedicated to providing students with the tools 
                                    they need to have efficient study sessions. Technologies used are 
                                    <span className="technologies"> React JS, Node JS, Rest API, PostgreSQL, 
                                    Material UI, Speech Recognition HTML, and CSS.</span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://ai-study.netlify.app">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={WWEImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">WWE vs. AEW</Card.Title>
                                <Card.Text>
                                    The goal of this website was to obtain the ratings data between WWE NXT and 
                                    AEW Dynamite tv shows and which show performed better. 
                                    Technologies used are <span className="technologies">Python, 
                                    Flask, Rest API, PostgreSQL, HTML, and CSS.</span> 
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href=" https://www.wwe-vs-aew.com">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={MusicImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Music History</Card.Title>
                                <Card.Text>
                                Music History is a site dedicated to providing the public information on the
                                history of music. Ranging from the different types of genres, artists and songs.
                                Technologies used are <span className="technologies">Node JS, HTML, CSS, and API's.</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://music-history101.herokuapp.com">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={BooksImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Good Books</Card.Title>
                                <Card.Text>
                                    Good Books is a site that provides you with free tools that 
                                    help you find books or discover new ones. The site offers book searching tools and 
                                    book recommendations. Technologies used are <span className="technologies">
                                    Node JS, HTML, CSS, and API's.</span>
                            </Card.Text>
                        </Card.Body>
  
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://good-books-app.herokuapp.com">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={Meme} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Meme Central</Card.Title>
                                <Card.Text>
                                Meme Central is a web app that shows real time financial data on meme
                                stocks and meme crypto. Technologies used are <span className="technologies">
                                Python, Flask, HTML, CSS, JavaScript, JQuery, and API's.</span>
                            </Card.Text>
                        </Card.Body>
  
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://meme-central123.herokuapp.com">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={JoblyImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Jobly</Card.Title>
                                <Card.Text>
                                    Jobly is a demo site where a user can search for companies, search for jobs and
                                    apply to jobs. Technologies used are <span className="technologies">
                                    React JS, Node JS, Rest API, PostgreSQL, HTML, and CSS. </span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="http://habitual-honey.surge.sh">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resume