import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import backend from '../data/backend.json';
import frontend from '../data/frontend.json';
import devops from '../data/devops.json';
import languages from '../data/languages.json';
import webdev from '../data/webdev.json';

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
        <Container>
            <h2 className='text-center mb-4'><FontAwesomeIcon icon={faLaptopCode} /> Skills & <span className='text-light'>Abilities</span></h2>
            <p className='text-center'>I build web and mobile apps using a mix of tools and technologies to create fast, reliable, and user-friendly experiences that people enjoy using.</p>
            <Row className='mt-4'>
              <h4 className='text-dark' style={{fontWeight: "600"}}>LANGUAGES <span className='p-2'>|</span></h4>
              {languages.map((language, index) => (
                <Col key={index} lg={2} md={3} sm={6} xs={6} className="skill-item text-center">
                    <div className='skill-box'>
                        <img src={language.icon} alt={language.name} className="skill-icon mb-2" />
                        <p>{language.name}</p>
                    </div>
                </Col>
              ))}
            </Row>
            <Row className='mt-2'>
              <h4 className='text-dark' style={{fontWeight: "600"}}>FRONTEND <span className='p-2'>|</span></h4>
              {frontend.map((item, index) => (
                <Col key={index} lg={2} md={3} sm={6} xs={6} className="skill-item text-center">
                    <div className='skill-box'>
                        <img src={item.icon} alt={item.name} className="skill-icon mb-2" />
                        <p>{item.name}</p>
                    </div>
                </Col>
              ))}
            </Row>
            <Row className='mt-2'>
              <h4 className='text-dark' style={{fontWeight: "600"}}>BACKEND <span className='p-2'>|</span></h4>
              {backend.map((item, index) => (
                <Col key={index} lg={2} md={3} sm={6} xs={6} className="skill-item text-center">
                    <div className='skill-box'>
                        <img src={item.icon} alt={item.name} className="skill-icon mb-2" />
                        <p>{item.name}</p>
                    </div>
                </Col>
              ))}
            </Row>
            <Row className='mt-2'>
              <h4 className='text-dark' style={{fontWeight: "600"}}>DEV OPS <span className='p-2'>|</span></h4>
              {devops.map((item, index) => (
                <Col key={index} lg={2} md={3} sm={6} xs={6} className="skill-item text-center">
                    <div className='skill-box'>
                        <img src={item.icon} alt={item.name} className="skill-icon mb-2" />
                        <p>{item.name}</p>
                    </div>
                </Col>
              ))}
            </Row>
            <Row  className='mt-2'>
              <h4 className='text-dark' style={{fontWeight: "600"}}>WEB DEV <span className='p-2'>|</span></h4>
              {webdev.map((item, index) => (
                <Col key={index} lg={2} md={3} sm={6} xs={8} className="skill-item text-center">
                    <div className='skill-box'>
                        <img src={item.icon} alt={item.name} className="skill-icon mb-2" />
                        <p>{item.name}</p>
                    </div>
                </Col>
              ))}
            </Row>
        </Container>
    </section>
  );
};

export default Skills;
