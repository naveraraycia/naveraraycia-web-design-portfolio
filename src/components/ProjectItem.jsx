function ProjectItem({data, number}) {
  const {title, img, figmaURL, siteURL } = data
  return (
    <div className="px-5 py-5 rounded-2xl font-sans shadow-xl w-full xl:w-fit">
      <div className="space-y-5">
        <div className="h-fit w-fit overflow-hidden rounded-2xl">
          <a href={figmaURL} target="_blank" rel="norefferer" className="w-fit h-fit hover:cursor-pointer rounded-2xl overflow-hidden">
            <img src={img} className='h-[600px] xl:h-[400px] w-full object-cover rounded-2xl hover:scale-110 duration-300' alt="web design 1" />
          </a>
        </div>
        <div className='space-y-4'>
          <div className="flex justify-between">
            <span className='font-semibold text-lg'>{title}</span>
            <span className='font-semibold text-lg'>{number+1 < 10 ? `0${number+1}` : number+1 }</span>
          </div>

          <div className="flex space-x-3">
            <a href={figmaURL} rel="noreferrer" target="_blank" className="rounded-full text-sm border-2 font-semibold border-black py-2 px-8 hover:cursor-pointer hover:text-white hover:bg-black duration-300">Figma</a>
            {siteURL && (
              <a href={siteURL} rel="noreferrer" target="_blank" className="rounded-full text-sm font-semibold text-white bg-black py-2 px-8 hover:cursor-pointer hover:bg-magenta duration-300">Visit</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem