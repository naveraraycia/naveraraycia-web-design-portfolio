import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto px-5 flex flex-col font-sans space-y-2 items-center justify-center pb-20 md:flex-row md:justify-between md:items-center md:space-y-0
    ">
      <span className="font-black text-3xl">ray.</span>
      <div className="space-x-1 duration-300 flex md:hidden">
        <a href="https://github.com/naveraraycia" className="h-fit w-fit" target="_blank" rel="noreferrer">
          <FaGithubSquare size={30} className="hover:text-magenta hover:cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/raynicornn" className="h-fit w-fit" target="_blank" rel="noreferrer">
          <FaFacebookSquare size={30} className="hover:text-magenta hover:cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/naveraraycia" className="h-fit w-fit" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} className="hover:text-magenta hover:cursor-pointer" />
        </a>
      </div>
      <span className="text-[12px] md:text-lg">Copyright &copy; {new Date().getUTCFullYear()} RMFN</span>
    </div>
  )
}

export default Footer