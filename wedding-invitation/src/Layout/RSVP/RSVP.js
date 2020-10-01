import React, { Component } from 'react'

import './RSVP.css';
import RSVPimage from '../../img/RSVP.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


export class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false,
            lastName: false,
            phone: false,
            email: false,
            attending: false,
            kidsMeal: false,
        };
    }

    render() {
        return (
            <div className="RSVP">
                <div className="FormContainer">
                    <div className="FormContainer__Title">
                        <h1>RSVP</h1>
                        <img src={RSVPimage}></img>
                    </div>
                    <form onChange={() => {
                        const button = document.querySelector(".Button");
                        const name = document.querySelector(".NameInput");
                        const lastName = document.querySelector(".LastNameInput");
                        const attending = document.querySelector(".AttendingInput");
                        const email = document.querySelector(".EmailInput");
                        const phone = document.querySelector(".PhoneInput");
                        const kidsMeal = document.querySelector(".KidsMealInput");

                        if (this.state.name == true && this.state.lastName == true && this.state.attending == true && this.state.email == true && this.state.phone == true && this.state.kidsMeal == true) {
                            button.classList.add("true");
                        } else {
                            button.classList.remove("true");
                        }
                    }}>
                        <div className="LeftSide">
                            <label>First Name: <span>*</span></label>
                            <br className="FieldDivider"></br>
                            <input
                                type="text"
                                required
                                className="NameInput"
                                onChange={() => {
                                    const name = document.querySelector(".NameInput");
                                    const nameIcon = document.querySelector(".iconName")

                                    if (name.value.length < 2) {
                                        nameIcon.classList.add("error");
                                        this.setState({ name: false });
                                    } else {
                                        nameIcon.classList.remove("error")
                                        this.setState({ name: true });
                                    }
                                }}
                            ></input>
                            <FontAwesomeIcon className="icon iconName" icon={faExclamationCircle} />
                            <br></br>

                            <label>Last Name: <span>*</span></label>
                            <br className="FieldDivider"></br>
                            <input
                                type="text"
                                required
                                className="LastNameInput"
                                onChange={() => {
                                    const lastName = document.querySelector(".LastNameInput");
                                    const lastNameIcon = document.querySelector(".iconLastName")

                                    if (lastName.value.length < 2) {
                                        lastNameIcon.classList.add("error");
                                        this.setState({ lastName: false });
                                    } else {
                                        lastNameIcon.classList.remove("error");
                                        this.setState({ lastName: true });
                                    }
                                }}
                            ></input>
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon iconLastName" />
                            <br></br>

                            <label>Attending? <span>*</span></label>
                            <select
                                required
                                className="AttendingInput"
                                onChange={() => {
                                    const attending = document.querySelector(".AttendingInput");
                                    const attendingIcon = document.querySelector(".iconAttending")

                                    if (attending.value == "selectedOption") {
                                        attendingIcon.classList.add("error");
                                        this.setState({ attending: false });
                                    } else {
                                        attendingIcon.classList.remove("error");
                                        this.setState({ attending: true });
                                    }
                                }}>
                                <option value="selectOption">Yes/No</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon iconAttending" />
                            <br></br>

                            <label>Additional Guests' Names</label>
                            <br className="FieldDivider"></br>
                            <input type="text"></input>

                        </div>

                        <div className="RightSide">
                            <label>E-Mail: <span>*</span></label>
                            <br className="FieldDivider"></br>
                            <input
                                type="email"
                                required
                                className="EmailInput"
                                onChange={() => {
                                    const email = document.querySelector(".EmailInput");
                                    const emailIcon = document.querySelector(".iconEmail");
                                    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                                    if (regx.test(email.value) == false) {
                                        emailIcon.classList.add("error");
                                        this.setState({ email: false });
                                    } else {
                                        emailIcon.classList.remove("error");
                                        this.setState({ email: true });
                                    }
                                }}>

                            </input>
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon iconEmail" />
                            <br></br>

                            <label>Phone Number: <span>*</span></label>
                            <br className="FieldDivider"></br>
                            <input
                                type="text"
                                required
                                className="PhoneInput"
                                onChange={() => {
                                    const phone = document.querySelector(".PhoneInput");
                                    const phoneIcon = document.querySelector(".iconPhone");
                                    const regx = /[0-9]|\./;

                                    if (regx.test(phone.value) == false) {
                                        phoneIcon.classList.add("error");
                                        this.setState({ phone: false });
                                    } else {
                                        phoneIcon.classList.remove("error");
                                        this.setState({ phone: true });
                                    }
                                }}></input>
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon iconPhone" />
                            <br></br>

                            <label>Kids meal required: <span>*</span></label>
                            <input
                                className="KidsMealInput"
                                type="number"
                                min="0"
                                max="4"
                                required
                                onChange={() => {
                                    const kidsMeal = document.querySelector(".KidsMealInput");
                                    const kidsMealIcon = document.querySelector(".iconKidsMeal");

                                    if (kidsMeal.value < 0) {
                                        kidsMealIcon.classList.add("error");
                                        this.setState({ kidsMeal: false });
                                    } else {
                                        kidsMealIcon.classList.remove("error");
                                        this.setState({ kidsMeal: true });
                                    }
                                }}></input>
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon iconKidsMeal" />
                            <br></br>

                            <label>Food allergies/intolerances</label>
                            <br className="FieldDivider"></br>
                            <input type="text"></input>
                            <br></br>
                        </div>
                        <br></br>
                        <div className="CommentArea">
                            <label className="LabelComment">Comments</label>
                            <br className="FieldDivider"></br>
                            <textarea></textarea>
                        </div>
                        <br></br>
                    </form>
                    <button className="Button" onClick={() => {
                        const message = document.querySelector(".MessageRSVP");

                        message.classList.add("visible");

                    }}>Submit</button>
                    <div className="MessageRSVP">
                        <span
                            className="exitButton"
                            onClick={() => {
                                const message = document.querySelector(".MessageRSVP");

                                message.classList.remove("visible");
                            }}
                        >x</span>
                        <div className="textBox">
                            <h2>Thank you!
                            <br></br>
                            Your RSVP has been sent.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RSVP
