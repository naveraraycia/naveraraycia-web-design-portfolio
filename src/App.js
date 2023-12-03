import Navbar from "./components/Navbar";
import resumePDF from './assets/resume/Resume-Navera-Raycia-Software.pdf'
import {webDesignProjects} from './projectDetails/projectInformation'
import ProjectItem from "./components/ProjectItem";
import Footer from "./components/Footer";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <section id="hero" className="relative gradient-bg h-[600px] md:h-[650px]">
        <div className="container mx-auto px-5 pt-10 flex flex-col h-full justify-between md:h-fit">
            <Navbar />
          
            <div className="flex flex-col justify-center items-center space-y-8 md:space-y-0">
              <div className="flex flex-col space-y-5 text-center mt-32 md:mt-44 justify-center items-center font-sans">
                <h1 className="font-black text-3xl md:text-5xl">Welcome to my design portfolio.</h1>
                <p className="text-xl md:text-2xl">Presenting the compilation of my ideas transformed into web design.</p>
              </div>
              <a href={resumePDF} rel="noreferrer" target="_blank" className="py-3 md:py-4 px-16 bg-black font-sans text-md text-white font-medium md:text-xl rounded-xl md:hidden hover:bg-magenta duration-300">Resume</a> 

              <div className="hidden absolute bottom-10 right-10 xl:right-20 bg-white rounded-2xl p-5 md:block">
                  <div className="flex flex-col space-y-2 items-center justify-center">
                    <a href="https://github.com/naveraraycia" className="h-fit w-fit" target="_blank" rel="noreferrer">
                      <FaGithubSquare size={30} className="hover:cursor-pointer hover:text-magenta duration-300" />
                    </a>
                    <a href="https://www.facebook.com/raynicornn" className="h-fit w-fit" target="_blank" rel="noreferrer">
                      <FaFacebookSquare size={30} className="hover:cursor-pointer hover:text-magenta duration-300" /> 
                    </a>
                    <a href="https://www.linkedin.com/in/naveraraycia" className="h-fit w-fit" target="_blank" rel="noreferrer">
                      <FaLinkedin size={30} className="hover:cursor-pointer hover:text-magenta duration-300" />
                    </a>
                  </div>
              </div>

            </div>

            <div className="hidden absolute bottom-0 bg-white text-center px-10 md:px-24 text-lg py-6 md:py-8 font-sans font-black rounded-t-2xl md:text-xl md:block">Web designs (10)</div>

            <div className=" bg-white text-center px-10 md:px-24 text-lg py-6 md:py-8 font-sans font-black rounded-t-2xl md:text-xl md:hidden">Web designs ({webDesignProjects.length})</div>
        </div>
      </section>

      <section id="projects" className="mt-24 pb-32">
        <div className="container mx-auto px-5 ">
          <div className="grid grid-cols-1 grid-rows-10 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-4 xl:grid-rows-3 gap-8">
            {webDesignProjects.map((project, index) => (
              <ProjectItem data={project} key={index} number={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    
    </>
    
  );
}

export default App;
