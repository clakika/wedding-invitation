import React from 'react';
import './App.css';

function App() {
  return (
    <section className="Card">
      {/*Navigation starts here*/}
      <nav>
          <ul>
            <li>Home</li>
            <li>Photo Gallery</li>
            <li>RSVP</li>
            <li>Location</li>
            <li>Wedding Party</li>
            <li>Event Date</li>
          </ul>
        </nav>
        {/*Navigation ends here*/}
      <div className="Container">
        {/*Home starts here*/}
        <div className="Header">
          <h1>MR <span>&</span> MRS</h1>
          <h3>are getting married!</h3>
        </div>
        <button className="Btn">RSVP</button>
        {/*Home ends here*/}
      </div>
    </section>
  );
}

export default App;
