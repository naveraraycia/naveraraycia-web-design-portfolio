import resumePDF from '../assets/resume/Resume-Navera-Raycia-Software.pdf'

function Navbar() {
  return (
    <div className=" flex justify-between lg:space-x-32 lg:justify-start">
      <div className="px-7 py-2 bg-white rounded-2xl text-xl font-black w-fit flex justify-center items-center font-sans">ray.</div>
      <div className="px-7 py-3 bg-white rounded-2xl text-xl w-fit flex justify-center items-center space-x-10">
        <a href="https://naveraraycia-portfolio.vercel.app/" target="_blank" rel='noreferrer' className="text-sm font-medium font-sans hover:cursor-pointer hover:scale-110 duration-300">Personal Website</a>
        <a href={resumePDF} target="_blank" rel='noreferrer' className="hidden py-2 px-16 bg-black font-sans text-white font-medium text-sm rounded-xl md:block hover:bg-magenta duration-300">Resume</a> 
      </div>
    </div>
  )
}

export default Navbar