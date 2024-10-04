import { PROJECTS } from "../utils/constants";
import externalLink from "../assets/externalLink.png";
import github from "../assets/github 2.png";

const SelectedProject = () => {
  return (
    <div className="mb-80 my-10">
      <div className="flex justify-start items-center py-4">
        <h1 className="text-6xl font-bold text-white/80">Selected Work</h1>
      </div>
      <div className="p-6 flex items-center justify-between flex-col gap-20">
        {PROJECTS.map((project, index) => (
          <div
            className="flex w-full justify-center bg-background p-12 gap-4 shadow-custom"
            key={index}
          >
            <div className="flex py-3 flex-col gap-3 text-white/90">
              <h2 className="items-start font-bold text-3xl">
                {project.title}
              </h2>
              <p className="text-sm text-white/80 font-medium">
                {project.description}
              </p>
              <div className="flex items-start mt-2 gap-3 text-white">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="bg-zinc-600 px-3 py-1.5 text-sm rounded-full"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4 py-3">
                <a
                  href="https://weddingpopcorn.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 bg-white/90 font-medium text-sm py-2 px-5 rounded-full text-black/90"
                >
                  Live Link{" "}
                  <img
                    className="w-4 object-contain hover:scale-110 transition-all duration-200"
                    src={externalLink}
                    alt="linkdin"
                  />
                </a>

                <a
                  href="https://weddingpopcorn.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 font-medium text-sm bg-white/90 py-2 px-5 rounded-full text-black/90"
                >
                  Github{" "}
                  <img
                    className="w-4 object-contain hover:scale-110 transition-all duration-200"
                    src={github}
                    alt="linkdin"
                  />
                </a>
              </div>
            </div>
            <div>
              <img
                src={project.image}
                className="rounded-xl hover:-rotate-2 transition duration-300"
                alt="Work"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProject;
