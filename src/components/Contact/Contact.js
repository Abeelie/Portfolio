import React, {useRef, useState} from "react";
import "./contact.css";
import ScreenHeading from "../../utilities/SubHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollservice";
import Animations from "../../utilities/animations";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import swal from "sweetalert";
import {Container, Form} from "react-bootstrap";

const Contact = (props) => {
    const initialFormState = {firstName: "", lastName: "", email: "", phoneNumber: "", message: ""};
    const [formData, setFormData] = useState(initialFormState);
    const formID = process.env.REACT_APP_ContactsFormKey;
    const formUrl = `https://submit-form.com/${formID}`;
    const [isSubmit, setIsSubmit] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState();
    const recaptchaRef = useRef();
    const recaptchaKey = process.env.REACT_APP_RecaptchaKey;

    const fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(recaptchaToken === undefined) {
            swal({text: "Please click on the I am not a robot to submit", icon: "error"});
        }else {
            setIsSubmit(true);
            await sendMessage();
            setFormData(initialFormState);
            setIsSubmit(false);
        }
    }

    const sendMessage = async () => {
        const data = {
            ...formData,
            "g-recaptcha-response": recaptchaToken
        }
        try {
            await axios.post(formUrl, data);
            await swal({title: "Message Sent", icon: "success"});
        } catch(error){
            await swal({title: error, text: "Message not submitted", icon: "error"});
            window.location.reload();
        }
    }

    const handleChangeToken = (token) => {
        setRecaptchaToken(token)
    }

    
    return (
        <div className="contact-container screen-container" id={props.id || ""}>
            <ScreenHeading title={"Contact"} subHeading={"Hire Me"} /> 
            <Container style={{ width: "90%", margin: "0 auto" }} className="contact-card">
                <Form onSubmit={handleSubmit} className="form-card">
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            value={formData.firstName}
                            onChange={handleChange}
                            name="firstName"
                            type="text" 
                            placeholder="Enter First Name" 
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            value={formData.lastName}
                            onChange={handleChange}
                            name="lastName"
                            type="text" 
                            placeholder="Enter Last Name" 
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
                            type="phone" 
                            placeholder="555-555-5555" 
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            type="email" 
                            placeholder="name@example.com"
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            value={formData.message}
                            onChange={handleChange}
                            name="message"
                            as="textarea" 
                            rows={3} 
                            required
                        />
                    </Form.Group>
                    <div align="center" className="recaptcha">
                        <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} onChange={handleChangeToken}/> 
                    </div>
                    <div align="center">
                        <button className="btn highlighted-btn">
                            {isSubmit ? "Submitting now!........." : "Submit Now!"}
                        </button> 
                    </div>    
                </Form>
            </Container>
        </div>
    )
}


export default Contact