import './App.css';
import './JavaScript.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Experience,
  Intro,
  FirstYear,
  SecondYear,
  ThirdYear,
  FourthYear,
  FifthYear,
  SixthYear,
  SeventhYear,
  EighthYear,
  NinthYear,
  Outro,
  MusicButton,
  NavBar,
} from './components.js';
import AwardImage from './Images.js';
import {
  Audio,
  BallTriangle,
  Bars,
  Blocks,
  Circles,
  CirclesWithBar,
  ColorRing,
  Comment,
  Discuss,
  Dna,
  Grid,
  FallingLines,
  FidgetSpinner,
  Hearts,
  InfinitySpin,
  LineWave,
  MagnifyingGlass,
  MutatingDots,
  Oval,
  ProgressBar,
  Puff,
  Radio,
  RevolvingDot,
  RotatingSquare,
  RotatingLines,
  Rings,
  TailSpin,
  ThreeDots,
  ThreeCircles,
  Triangle,
  RotatingTriangles,
  Watch,
  Vortex,
} from 'react-loader-spinner';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

/*
const IntroStyle = {
  backgroundImage: `url(${FirstImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '1400px',
};
*/

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <Element name="LandingPage" className="section">
          <div className="LandingPage">
            <div className="Porsche">
              PORSCHE
              <span className="volution">volution</span>
              <p className="volume-paragraph">
                Turn up the volume to enjoy full experience
              </p>
            </div>
            <Experience />

            <AwardImage />
          </div>
        </Element>
        <Element name="Intro" className="section">
          <Intro />
        </Element>
        <Element name="FirstYear" className="section">
          <FirstYear />
        </Element>
        <Element name="SecondYear" className="section">
          <SecondYear />
        </Element>
        <Element name="ThirdYear" className="section">
          <ThirdYear />
        </Element>
        <Element name="FourthYear" className="section">
          <FourthYear />
        </Element>
        <Element name="FifthYear" className="section">
          <FifthYear />
        </Element>
        <Element name="SixthYear" className="section">
          <SixthYear />
        </Element>
        <Element name="SeventhYear" className="section">
          <SeventhYear />
        </Element>
        <Element name="EighthYear" className="section">
          <EighthYear />
        </Element>
        <Element name="NinthYear" className="section">
          <NinthYear />
        </Element>
        <Outro />
        <MusicButton audioSrc="https://citytrend.com.ng/wp-content/uploads/2022/06/Twenty-One-Pilots-%E2%80%94-Hometown.mp3?_=1" />
      </div>
    );
  }
}

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Intro />;
  }
}

ReactDOM.render(<LandingPage />, document.getElementById('root'));
export default LandingPage;

