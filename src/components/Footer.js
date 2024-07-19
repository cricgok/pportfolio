import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Footer = () => {
  return (
    <motion.footer 
      className="footer" 
      variants={footerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ backgroundColor: '#282c34', color: '#fff', padding: '40px 0' }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-4 mb-sm-0">
            <motion.img 
              src={logo} 
              alt="Logo" 
              style={{ width: '120px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Coding the future, where innovation unfolds in lines of logic and creativity.
            </p>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-4">
              <a 
                href="https://www.linkedin.com/in/gokul-ramesh-564b3b249/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: '0 10px' }}
              >
                <motion.img 
                  src={navIcon1} 
                  alt="LinkedIn Icon" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} 
                  style={{ width: '24px' }}
                />
              </a>
              <a 
                href="https://www.facebook.com/gokspandya.gokspandya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: '0 10px' }}
              >
                <motion.img 
                  src={navIcon2} 
                  alt="Facebook Icon" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} 
                  style={{ width: '24px' }}
                />
              </a>
              <a 
                href="https://www.instagram.com/mr__sparrow__33/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: '0 10px' }}
              >
                <motion.img 
                  src={navIcon3} 
                  alt="Instagram Icon" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} 
                  style={{ width: '24px' }}
                />
              </a>
            </div>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              @Copyright 2023. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};
