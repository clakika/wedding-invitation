import React, { Component } from 'react';
import './Gallery.css';

export class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Photo Gallery</h1>

                <div className="GalleryContainer">
                    <div className="imageOne Picture" onClick={() => {
                        const image = document.querySelector(".imageOne");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                    <div className="imageTwo Picture" onClick={() => {
                        const image = document.querySelector(".imageTwo");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                    <div className="imageThree Picture" onClick={() => {
                        const image = document.querySelector(".imageThree");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                    <div className="imageFour Picture" onClick={() => {
                        const image = document.querySelector(".imageFour");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                    <div className="imageFive Picture" onClick={() => {
                        const image = document.querySelector(".imageFive");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                    <div className="imageSix Picture" onClick={() => {
                        const image = document.querySelector(".imageSix");

                        image.classList.toggle("clicked");
                    }
                    }></div>
                </div>
            </div>
        )
    }
}

export default Gallery
