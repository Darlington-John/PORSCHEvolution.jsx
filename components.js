import React from 'react';
import './App.css';
import './JavaScript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

export class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  scrollToDiv() {
    const div = document.getElementById('Intro');
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }
  render() {
    return (
      <button className="Experience" onClick={this.scrollToDiv}>
        Start Experience
      </button>
    );
  }
}

export class NavBar extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log('scrolling has started');
    });

    Events.scrollEvent.register('end', () => {
      console.log('scrolling has ended');
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="LandingPage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Start{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="Intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Intro{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="FirstYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1930s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="SecondYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1940s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="ThirdYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1950s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="FourthYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1960s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="FifthYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1970s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="SixthYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1980s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="SeventhYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              1990s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="EighthYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              2000s{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link
              activeClass="active"
              to="NinthYear"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              2020s{' '}
            </Link>{' '}
          </li>{' '}
        </ul>{' '}
      </div>
    );
  }
}

export class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Intro" id="Intro">
        <div className="Ferdinand">
          <h1>Ferdinand Porsche</h1>
          <p className="Ferdinand-paragraph">
            The history of Porsche goes back to 1875 - the birth year of
            Ferdinand Porsche. It is he who laid the foundations for a unique
            company with strong ideals.
          </p>
        </div>
      </div>
    );
  }
}

export class MusicButton extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  playMusic = () => {
    this.audioRef.current.play();
  };

  render() {
    return (
      <div className="MusicDiv">
        <button onClick={this.playMusic} className="MusicPlay">
          <FontAwesomeIcon
            icon={faVolumeMute}
            className="fa-2xl"
            style={{ color: '#ffffff' }}
          />
        </button>
        <audio ref={this.audioRef} src={this.props.audioSrc} />
      </div>
    );
  }
}

export class FirstYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FirstYear">
        <div className="Ferdinand">
          <h1>1930s</h1>
          <p className="FirstYear-paragraph">
            <b>Type 64 Racing Coupé:</b> Built for long-distance
            ‘Berlin–Rom-Wagen’ endurance competition. Considered the forefathers
            of all later Porsche sports cars.
          </p>
        </div>
      </div>
    );
  }
}

export class SecondYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SecondYear">
        <div className="Ferdinand">
          <h1>1940s</h1>
          <p className="SecondYear-paragraph">
            <b>356 Speedster:</b> Porsche's first production automobile started
            in Gmünd in Austria, where only 49 of these aluminum Porsches were
            built.
          </p>
        </div>
      </div>
    );
  }
}

export class ThirdYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ThirdYear">
        <div className="Ferdinand">
          <h1>1950s</h1>
          <p className="ThirdYear-paragraph">
            <b>356 Carrera Cabriolet:</b> Shortly before Porsche celebrated 10th
            anniversary of 356 model, 356 had developed into one of the world’s
            most respected sports cars.
          </p>
        </div>
      </div>
    );
  }
}

export class FourthYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FourthYear">
        <div className="Ferdinand">
          <h1>1960s</h1>
          <p className="FourthYear-paragraph">
            <b>901:</b> Successor of Porsche 356. Between 14 September and 16
            November 1964, 82 cars were built. Due to Peugeot was renamed to
            911.
          </p>
        </div>
      </div>
    );
  }
}

export class FifthYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FifthYear">
        <div className="Ferdinand">
          <h1>1970s</h1>
          <p className="FifthYear-paragraph">
            <b>911 Turbo:</b> At the Paris Auto Show Porsche presents the 911
            Turbo – the world’s first production sports car with exhaust
            turbocharger and pressure regulator.
          </p>
        </div>
      </div>
    );
  }
}

export class SixthYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SixthYear">
        <div className="Ferdinand">
          <h1> 1980s</h1>
          <p className="SixthYear-paragraph">
            <b>911 Carrera Speedster:</b> In 1984 the 911 celebrated it's 20th
            birthday. It had a lower and flatter windscreen and a simpler manual
            top that folded beneath a fiberglass cover.
          </p>
        </div>
      </div>
    );
  }
}

export class SeventhYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SeventhYear">
        <div className="Ferdinand">
          <h1>1990s</h1>
          <p className="SeventhYear-paragraph">
            <b>911:</b> It’s got classic lines, albeit updated with plastic
            bumpers, with modern technology such as 4x4 ABS and electronic
            heating.
          </p>
        </div>
      </div>
    );
  }
}

export class EighthYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="EighthYear">
        <div className="Ferdinand">
          <h1>2010s</h1>
          <p className="EighthYear-paragraph">
            <b>911 Carrera 4S Coupe:</b> The iconic Porsche 911 sports car
            celebrates its 50th birthday in 2013. Today's 911 still has many
            stories to tell. Of heroic race victories, iconic deisgn, childhood
            dreams. And of a timeless idea.
          </p>
        </div>
      </div>
    );
  }
}

export class NinthYear extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NinthYear">
        <div className="Ferdinand">
          <h1>2020s </h1>
          <p className="NinthYear-paragraph">
            <b>The 911.</b> Tradition Future. Since 1963.
          </p>
        </div>
      </div>
    );
  }
}

export class Outro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Outro">
        <div className="Box">
          <h3 className="Created">CREATED BY:</h3>
          <h1 className="Email">onuohadarlington38@gmail.com</h1>
          <h3 className="Read">READ A CASE STUDY FROM THIS PROJECT</h3>
          <h1 className="Port">Darlington.com/portfolio/porschevolution</h1>
          <p className="LastWords">
            Many thanks to PV NOVA, a cool musician from France, for the song
            ‘Evolution of Get Lucky - Daft Punk Chronologic cover.' Please note
            that I do not own the music in this project and it is not my
            intention to infringe itellectual property rights of Porsche.
          </p>
        </div>
      </div>
    );
  }
}
