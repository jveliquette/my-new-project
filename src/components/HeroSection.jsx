import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Starfield from './Starfield';

const HeroSection = () => {
  return (
    <>
      <Starfield />
      <section id="home" className="hero-section">
        <div className="container text-center">
          <h2>Hi There,<br /> I'm Julia <span>Veliquette</span></h2>
          <p>I am a <span className="typing-text">Full-Stack Software Engineer</span></p>
          <Button href="#about" variant="primary">
            About Me <br /> <FontAwesomeIcon icon={faArrowCircleDown} />
          </Button>
          <div className="socials mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
            <a href="https://gitlab.com" target='_blank' rel='noopener norefferer'><FontAwesomeIcon icon={faGitlab} size='2x' /></a>
          </div>
        </div>
      </section>
    </>

  );
};

export default HeroSection;
