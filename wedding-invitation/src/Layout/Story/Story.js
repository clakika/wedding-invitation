import React, { Component } from 'react';
import './Story.css';

export class Story extends Component {
    render() {
        return (
            <div className="Story">
                <header className="HeaderStory">
                    <div>
                        <div className="StoryImg"></div>
                    </div>
                    <h1>Our Story</h1>
                </header>

                <div className="StoryBody">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit leo. Nullam cursus ultrices euismod. Maecenas sem lacus, consectetur non gravida non, feugiat fringilla metus. Quisque luctus maximus faucibus. Etiam lacinia tincidunt suscipit. Nam ligula ipsum, eleifend id ornare ut, vestibulum nec elit. Maecenas id fermentum lorem. Morbi tincidunt sapien ac egestas elementum. Nam viverra, nulla pharetra interdum tristique, lorem arcu lobortis metus, sit amet rutrum nibh ex ac urna. Vivamus in libero condimentum, vulputate ligula eu, luctus metus. Aliquam sollicitudin justo vitae quam mattis accumsan. Donec sodales, arcu ut pellentesque commodo, erat urna fermentum turpis, eu mattis metus turpis vitae sapien.
                    </p>
                </div>
            </div>
        )
    }
}

export default Story;
