import React, { Component } from 'react';
import './Location.css';



export class Location extends Component {
    render() {
        return (
            <div className="Location">
                <h1>Locations</h1>
                <div className="LocationsContainer">

                    <div className="BoxOne Box">
                        <div className="LocationOneImg"></div>
                        <h2>Ceremony</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, risus vitae aliquam varius, nibh orci pretium est, ut maximus augue urna ac mi. </p>
                        <h5>❀</h5>
                        <p className="Address">3134, Main Street N.23, Seattle, Washington</p>
                    </div>

                    <div className="BoxTwo Box">
                        <div className="LocationTwoImg"></div>
                        <h2>Restaurant</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, risus vitae aliquam varius, nibh orci pretium est, ut maximus augue urna ac mi. </p>
                        <h5>❀</h5>
                        <p className="Address">3134, Main Street N.23, Seattle, Washington</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Location
