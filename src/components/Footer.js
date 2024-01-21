import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const Footer = () => {
  return (
    <motion.footer className="footer" variants={footerVariants} initial="hidden" animate="visible">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <motion.img src={logo} alt="Logo" />
          </Col>
          <div className="quote-container text-center">
        <p>Coding the future, where innovation unfolds in lines of logic and creativity.</p>
      </div>
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gokul-ramesh-564b3b249/" target="_blank" rel="noopener noreferrer">
                <motion.img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/gokspandya.gokspandya/" target="_blank" rel="noopener noreferrer">
                <motion.img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/mr__sparrow__33/" target="_blank" rel="noopener noreferrer">
                <motion.img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="text-center">@Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      
    </motion.footer>
  );
};
