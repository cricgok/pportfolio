import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
   
    {
      title: "CrickGoks Calculator",
      description: "Web Development",
      imgUrl: projImg2,
    }, 
     
    {
      title: "TO DO Task list",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Puzzle Game",
      description: "Python Game Development",
      imgUrl: projImg1,
    },
    {
      title: "Library Management",
      description: "Web Develpment",
      imgUrl: projImg4,
    },
    {
      title: "Employee Management",
      description: "Web Develpment",
      imgUrl: projImg5,
    },{
      title: "Covid Vaccine Booking System",
      description: "Web Develpment",
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Practicalities</h2>
                <p>Projects on a resume showcase practical skills and problem-solving abilities, differentiating you from other candidates. They demonstrate hands-on experience, proving your ability to apply theoretical knowledge in real-world scenarios. A well-documented project portfolio highlights initiative, communication skills, and continuous learning, making you a valuable asset to potential employers. Including quantifiable achievements and a link to an online portfolio further strengthens your resume.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
  <p>Project 1: My first project was a calculator, where I implemented HTML, CSS, and JavaScript.This project provided a solid foundation for understanding front-end technologies and enhancing my problem-solving skills.</p>
  <p>Project 2: Another notable project in my journey was the creation of a task list application.Similar to the calculator, it involved HTML, CSS, and JavaScript. This project further honed my skills in web development and allowed me to explore interactive user interfaces.</p>
  <p>Project 3: The Python project implements a sliding puzzle game using the Pygame library. Players can interact with the puzzle by clicking blocks or using arrow keys to slide them and solve the puzzle. The game includes features like resetting the puzzle, starting a new game, and solving the puzzle.</p>
  <p>Project 4: Created a robust library management system using MySQL database and Node.js for backend development. Utilized React.js for the frontend to provide an intuitive user interface. Implemented features such as book cataloging, borrower management, book borrowing and returning functionalities, and generating reports to enhance library operations and user experience.</p>
  <p>Project 5: A full-stack web application built with React.js and Node.js, facilitating the management of employee data. Features include adding, viewing, filtering, and editing employee records. The system allows administrators to maintain an organized database of employees, with functionalities for searching, sorting, and updating employee information.</p>
  <p>Project 6: Developed a dynamic vaccination booking system using React.js, integrating RESTful APIs for data management. Employed CSS theming to enhance user experience with captivating designs such as Cyberpunk and Medicine themes. Utilized modern web development tools and techniques to ensure responsiveness and scalability across various devices.Developed a dynamic vaccination booking system using React.js, integrating RESTful APIs for data management. Employed CSS theming to enhance user experience with captivating designs such as Cyberpunk and Medicine themes. Utilized modern web development tools and techniques to ensure responsiveness and scalability across various devices.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        
                    <div className="internship-info">
  <h4>Data Science Intern</h4>
  <p><strong>Company:</strong> Oasis InfoByte</p>
  <p><strong>Duration:</strong> 1 month</p>
  <p><strong>About the Internship:</strong> Worked on various data science projects and gained hands-on experience in areas like IRIS flower classification, unemployment data analysis, sales price prediction, car price prediction, and email spam detection.</p>
  <p><strong>Experience:</strong> Developed analytical and problem-solving skills through the completion of diverse mini projects. Collaborated with a team to enhance data analysis techniques and contribute to the field of data science.</p>
</div>

<div className="internship-info">
  <h4>Cisco VIP Program - Virtual Internship</h4>
  <p><strong>Duration:</strong> 2 months</p>
  <p><strong>Training:</strong> Introduction to Cybersecurity</p>
  <p><strong>Mode:</strong> Online</p>
  <p><strong>About the Internship:</strong> Participated in Cisco's Virtual Internship Program (VIP) focused on cybersecurity. Completed a comprehensive course introducing key concepts in cybersecurity, enhancing knowledge in the field.</p>
  <p><strong>Experience:</strong> Gained insights into cybersecurity practices, protocols, and technologies. Acquired foundational knowledge and practical skills through hands-on training modules.</p>
</div>

                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>

    </section>
  )
}