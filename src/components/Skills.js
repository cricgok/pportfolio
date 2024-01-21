import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>My Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter1} alt="Frontend" />
                  <h5>Frontend</h5>
                </motion.div>
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter2} alt="Backend" />
                  <h5>Backend</h5>
                </motion.div>
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter6} alt="Database" />
                  <h5>Database</h5>
                </motion.div>
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter5} alt="Python" />
                  <h5>Python</h5>
                </motion.div>
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter4} alt="Java" />
                  <h5>Java</h5>
                </motion.div>
                <motion.div variants={skillVariants} initial="hidden" animate="visible" className="item">
                  <img src={meter3} alt="Brand Identity" />
                  <h5>React</h5>
                </motion.div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
