const ProjectsItem = ({img, title, language, url}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#3D5A80]">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-[0.2] object-cover h-full "/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-wide text-center">
                {title}
            </h3>
            <p className="pb-4 pt-2 text-[#FFFFFF] text-center">{language}</p>
            <a href={url} target="_blank">
                <p className="text-center p-3 rounded-lg bg-white text-[#0F1C2E] font-bold cursor-pointer text-lg">More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectsItem