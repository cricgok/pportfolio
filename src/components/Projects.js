import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/shopmern.png";
import projImg6 from "../assets/img/dsatodo.png";
import projImg7 from "../assets/img/quiz.png";
import projImg8 from "../assets/img/bitbuddy.png";
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
      description: "Web Development",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce Website",
      description: "Full Stack Development",
      imgUrl: projImg5,
    },
    {
      title: "DSA ToDO Solver",
      description: "Web Development",
      imgUrl: projImg6,
    },
    {
      title: "Quiz App",
      description: "Web Development",
      imgUrl: projImg7,
    },
    {
      title: "Bite Buddy",
      description: "Full Stack Development",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
  <Container>
    <Row>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 1: CrickGoks Calculator</h5>
          <p>This project involved creating a calculator using HTML, CSS, and JavaScript. It provided a solid foundation for understanding front-end technologies and enhanced problem-solving skills.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 2: TO DO Task List</h5>
          <p>Developed a task list application, similar to the calculator project, using HTML, CSS, and JavaScript. This project further honed web development skills and explored interactive user interfaces.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 3: Puzzle Game</h5>
          <p>Implemented a sliding puzzle game using the Pygame library in Python. The game features interactions with the puzzle through clicks or arrow keys, including options to reset, start a new game, and solve the puzzle.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 4: Library Management System</h5>
          <p>Developed a library management system using MySQL, Node.js, and React.js. Features include book cataloging, borrower management, book borrowing and returning functionalities, and report generation for enhanced library operations.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 5: E-commerce Website</h5>
          <p>Built an e-commerce website using React.js, Node.js, Express.js, and MongoDB. Designed for small business owners, it includes admin and user portals for managing products, orders, and user data.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 6: DSA ToDO Solver</h5>
          <p>Developed a web application for tracking progress and managing solved problems in Data Structures and Algorithms (DSA). Utilized ReactJS for the UI and MySQL and NodeJS for the backend, offering features to track progress and manage problem-solving status.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 7: Quiz App</h5>
          <p>Created a dynamic Quiz app with user registration, login, and profile features. Users can take quizzes and view their scores on their profile page.</p>
        </div>
      </Col>
      <Col md={6} className="mb-4">
        <div className="project-details">
          <h5>Project 8: Bite Buddy</h5>
          <p>Developed Bite Buddy, a MERN stack food delivery application, featuring search and order capabilities, secure Stripe payment integration, order tracking, order history, and an admin page for managing products, categories, and orders.</p>
        </div>
      </Col>
    </Row>
  </Container>
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
                        <div className="internship-info">
                          <h4>Web Developer Intern</h4>
                          <p><strong>Company:</strong> Codsoft Pvt Ltd</p>
                          <p><strong>Duration:</strong> Nov 2023 – Dec 2023</p>
                          <p><strong>About the Internship:</strong> Contributed to various projects, enhancing proficiency in web development. Acquired skills in HTML, CSS, JavaScript, and ReactJS, refining coding abilities, and gaining practical experience.</p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
