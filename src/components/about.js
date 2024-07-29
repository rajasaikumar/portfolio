import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { MdOutlineCss } from "react-icons/md";
import { FaReact,FaJava, FaHtml5,FaBootstrap,FaGithub   } from 'react-icons/fa';

const IconGrid = () => {
  return (
    <section id='about'>
    <Container className='bg-secondary'>
    
      <Row className="text-center ">
      <h2 className="text-center my-4">MySkills</h2>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <FaHtml5  size={50} color='blue'/>
          <p >Html</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <MdOutlineCss size={60}/>
          <p >Css</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <FaBootstrap  size={50} color='purple'/>
          <p>Bootstrap</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <GrMysql  size={50}/>
          <p>MySql</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <FaReact size={50} color='blue'/>
          <p>React</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <FaJava  size={50}/>
        <p>java</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <TbBrandJavascript  size={50} color='yellow'/>
          <p>javascript</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="icon-container">
        <FaGithub size={50}/>
          <p>Github</p>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default IconGrid;
