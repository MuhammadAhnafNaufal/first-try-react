// eslint-disable-next-line
// import React from 'react';
import NavBar from './component/NavBar';
import Intro from './component/Intro';
import './App.css';
import './style/landingPage.css';
import Trending from './component/Trending';
import Superhero from './component/Superhero';


function App() {
  return (
    <div>
      {/* INTRO SECTION */}
      <div className='MyBG'>
        <NavBar/>
        <Intro/>
      </div>
      {/* END OF INTRO */}

      {/* trending section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of trending */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* end of superhero section */}
    </div>
  );
}

export default App;
