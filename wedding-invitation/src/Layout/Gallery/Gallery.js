import React, { Component } from 'react';
import './Gallery.css';

import storyOne from '../../img/storyOne.jpg';

export class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <header className="HeaderGallery">
                    <div>
                        <div className="StoryImg"></div>
                    </div>
                    <h1>Our Story</h1>
                </header>
            </div>
        )
    }
}

export default Gallery
