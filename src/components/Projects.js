import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
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
                <h2>Projects</h2>
                <p>Projects on a resume showcase practical skills and problem-solving abilities, differentiating you from other candidates. They demonstrate hands-on experience, proving your ability to apply theoretical knowledge in real-world scenarios. A well-documented project portfolio highlights initiative, communication skills, and continuous learning, making you a valuable asset to potential employers. Including quantifiable achievements and a link to an online portfolio further strengthens your resume.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Project 1: My first project was a calculator, where I implemented HTML, CSS, and JavaScript.
      This project provided a solid foundation for understanding front-end technologies and
      enhancing my problem-solving skills.</p>

      <p>Project 2: Another notable project in my journey was the creation of a task list application.
      Similar to the calculator, it involved HTML, CSS, and JavaScript. This project further
      honed my skills in web development and allowed me to explore interactive user interfaces.
   </p>

   <p>Project 3: The Python project implements a sliding puzzle game using the Pygame library. Players can interact with the puzzle by clicking blocks or using arrow keys to slide them and solve the puzzle. The game includes features like resetting the puzzle, starting a new game, and solving the puzzle.
</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
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