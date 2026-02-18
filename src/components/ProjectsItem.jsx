const ProjectsItem = ({img, title, language, url}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-2xl rounded-xl group hover:shadow-accentHover transition-shadow overflow-hidden border-2 border-accent/40 hover:border-accent">
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-[0.15] object-cover h-full transition-opacity duration-300"/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
            <h3 className="text-2xl font-bold text-accentHover tracking-wide text-center">
                {title}
            </h3>
            <p className="pb-4 pt-2 text-textPrimary text-center font-medium">{language}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <p className="text-center p-3 rounded-lg bg-accent text-primaryBg font-bold cursor-pointer text-lg hover:bg-accentHover transition-colors">More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectsItem
