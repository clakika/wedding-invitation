import React, { Component } from 'react';
import './Gallery.css';

export class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Photo Gallery</h1>

                <div className="GalleryContainer">
                    <div className="imageOne Picture"></div>
                    <div className="imageTwo Picture"></div>
                    <div className="imageThree Picture"></div>
                    <div className="imageFour Picture"></div>
                    <div className="imageFive Picture"></div>
                    <div className="imageSix Picture"></div>
                </div>
            </div>
        )
    }
}

export default Gallery
