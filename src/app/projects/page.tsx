
import Header from "../components/header";
import Image from "next/image";
import Resturant from "../public/resturentimg.jpeg";
import Tictactoe from "../public/tictactoeimg.jpeg";
import Alpha from "../public/alphaimg.jpeg"
export default function Projects(){
    return(
        <div>
             <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-container">
                    <div className="project">
                    <Image src={Tictactoe} alt="Project-1"  />
                        <div className="project-details">
                            <h3>Project 1</h3>
                            <p>This project showcases a classic Tic-Tac-Toe game
                                developed using HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="project">
                    <Image src={Resturant} alt="Project-2"  />
                        <div className="project-details">
                            <h3>Project 2</h3>
                            <p>This project involved designing and developing a fully responsive
                                restaurant website using HTML and CSS.</p>
                        </div>
                    </div>
                    <div className="project">
                      <Image src={Alpha} alt="Project-3"  />   
                        <div className="project-details">
                            <h3>Project 3</h3>
                            <p>Developed a sleek and modern website for Alpha Skincare using HTML  CSS,
                                focusing on clean design and user-friendly navigation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}