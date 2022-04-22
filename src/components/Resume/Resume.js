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
import BibleImage from "../../assets/Resume/Bible.png";
import LottoImage from "../../assets/Resume/lotto.png";
import MathImage from "../../assets/Resume/Math.jpg";
import GuitarImage from "../../assets/Resume/Guitar.png";


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
                                <Card.Text className="card-text">
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
                                <Card.Text className="card-text">
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
                                <Card.Text className="card-text">
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
                                <Card.Text className="card-text">
                                    Good Books provides free tools that 
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
                                <Card.Text className="card-text">
                                    Meme Central shows real time financial data on meme
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
                                <Card.Text className="card-text">
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
                <br/>
                <Row>
                <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={BibleImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Multilingual Bible API</Card.Title>
                                <Card.Text className="card-text">
                                    I created and published a multilingual bible API that has translations for
                                    English, French, Spanish, and Chinese. The API can be found on Rapid API. 
                                    Technologies used are <span className="technologies">
                                    Node JS, Express JS, MongoDB, Mongoose, and Express Rate Limiter. </span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://rapidapi.com/abrahaelill-GRIsGuS-TSY/api/multilingual-bible/">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>

                <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={LottoImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Lotto API</Card.Title>
                                <Card.Text className="card-text">
                                    I published a Powerball and Mega Millions API. The API gets statistical data on the 
                                    Powerball and Mega Millions lottery data. The API can be found 
                                    on Rapid API. Technologies used are <span className="technologies">
                                    Node JS, Express JS, MongoDB, Mongoose, Cheerio, Cron jobs and Express Rate Limiter. </span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://rapidapi.com/abrahaelill-GRIsGuS-TSY/api/powerball-and-mega-millions/">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={MathImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Math API</Card.Title>
                                <Card.Text className="card-text">
                                    I created and published a Math API that can be used to solve arithmetic, 
                                    geometry, number theory, statistics and fractions problems. Technologies used are <span className="technologies">
                                    Node JS, Express JS, Node Cron jobs and Express Rate Limiter. </span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://rapidapi.com/abrahaelill-GRIsGuS-TSY/api/math7/">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                  </Col>

                  <Col sm={12} md={6}>
                    <Card style={{ width: '18rem', margin: "0 auto" }} className="card-effects">
                        <Card.Img variant="top" src={GuitarImage} className="Card-Img"/>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} className="card-title">Guitar Chords API</Card.Title>
                                <Card.Text className="card-text">
                                    I created and published a Guitar Chords API. This API allows the user to get
                                    the finger position of every single guitar chord and access popular chord progressions. 
                                    Technologies used are <span className="technologies">
                                    Node JS, Express JS, Mongoose, MongoDB, Swagger JS, Node Cron jobs and Express Rate Limiter. </span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Link href="https://rapidapi.com/abrahaelill-GRIsGuS-TSY/api/guitar-chords">Click here for website</Card.Link>
                        </Card.Body>
                    </Card>
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resume