import React, { Component } from 'react'

import './RSVP.css';
import RSVPimage from '../../img/RSVP.svg';

export class RSVP extends Component {
    render() {
        return (
            <div className="RSVP">
                <div className="FormContainer">
                    <h1>RSVP</h1>
                    <img src={RSVPimage}></img>
                    <form>
                        <div className="LeftSide">
                            <label>First Name: <span>*</span></label>
                            <br></br>
                            <input type="text" required></input>
                            <br></br>

                            <label>Last Name: <span>*</span></label>
                            <br></br>
                            <input type="text" required></input>
                            <br></br>

                            <label>Attending? <span>*</span></label>
                            <br></br>
                            <input type="radio" required></input><label>Yes, can't wait!</label>
                            <input type="radio" required></input><label>No, can't come.</label>
                            <br></br>

                            <label>Kids meal required: <span>*</span></label>
                            <input type="number" min="0" max="4" required></input>
                            <br></br>

                            <label>Food allergies/intolerances <span>*</span></label>
                            <br></br>
                            <input type="text"></input>
                            <br></br>
                        </div>

                        <div className="RightSide">
                            <label>E-Mail: <span>*</span></label>
                            <br></br>
                            <input type="email" required></input>
                            <br></br>

                            <label>Phone Number: <span>*</span></label>
                            <br></br>
                            <input type="text" required></input>
                            <br></br>

                            <label>Comments? <span>*</span></label>
                            <br></br>
                            <textarea></textarea>
                            <br></br>
                        </div>
                    </form>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default RSVP
