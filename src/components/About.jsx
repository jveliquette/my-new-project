import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutPic from '../Assets/about-pic.png';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h2 className='text-center'>About <span>Me</span></h2>
        <Row className='align-items-center'>
            <Col md={6}>
                <img src={aboutPic} alt="Profile" className="img-fluid rounded" />
            </Col>
            <Col md={6}>
                <h3>I'm Julia</h3>
                <h6>Full-Stack Software Engineer with a passion for creating dynamic web applications</h6>
                <p>I'm a dedicated and results-driven professional with a background in firefighting and a strong interest in technology. Always eager to learn, I continuously improve my coding abilities. I'm known for my ability to remain calm under pressure and work well in a team. I have a passion for all things design, including digital art. I am a detail-oriented and technical thinker with a knack for problem-solving.</p>
                <div>
                    <p><strong>Email:</strong> juliaveliquette@gmail.com</p>
                    <p><strong>Location:</strong> Greenwood, California</p>
                </div>
                <Button href="https://your-resume-link" target="_blank" rel="noopener noreferrer" variant="primary" className="btn btn-primary">Resume <i className="fas fa-chevron-right"></i></Button>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
