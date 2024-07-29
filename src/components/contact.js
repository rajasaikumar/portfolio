import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return (
    <section className=" text-white mt-5 p-4 " id='contact'>
       <div className='footer container'>
       <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              In this portfolio i have mention my skills and i have intrested to learn new technologies for more download my Resume.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: saikumar54722@gmail.com <br />
              Phone: +91 6309401182 <br />
              Address: Nagaram,Hyderabad,India.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">Facebook</a>
              </li>
              <li>
                <a href="/" className="text-light">Twitter</a>
              </li>
              <li>
                <a href="/" className="text-light">Instagram</a>
              </li>
              <li>
                <a href="/" className="text-light">LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg" />
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0 mt-3">
            <p className="mb-0 ">&copy;  Your Company. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right mt-3">
            <p className="mb-0">Privacy Policy | Terms of Service</p>
          </Col>
        </Row>
      </Container>

       </div>
  </section>
   
  )
}

export default Contact
