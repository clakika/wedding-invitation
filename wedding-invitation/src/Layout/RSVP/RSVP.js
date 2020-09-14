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
                            <select>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <br></br>

                            <label>Additional Guests' Names</label>
                            <br></br>
                            <input type="text"></input>

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

                            <label>Kids meal required: <span>*</span></label>
                            <input className="KidsMealsInput" type="number" min="0" max="4" required></input>
                            <br></br>

                            <label>Food allergies/intolerances <span>*</span></label>
                            <br></br>
                            <input type="text"></input>
                            <br></br>
                        </div>
                        <br></br>
                        <label className="LabelComment">Comments</label>
                            <br></br>
                            <textarea></textarea>
                            <br></br>
                    </form>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default RSVP
