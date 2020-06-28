import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 className="titleRed"> Your name here</h1>


        <br />

        <br /> <img src={imageInSrc} /> <br />

        <br /><img src="/imageInPublic.jpg" />

      </div>
      <iframe width="320" height="240" src="https://www.youtube.com/embed/XewKPAClkSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





    </div>
  );
}


export default App;