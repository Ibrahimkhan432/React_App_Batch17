import ProjectCard from "../components/ProjectCard";
import projectdata from "../constant/data";


const Project = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Latest Projects</h1>
      <div className="">
        <div className="flex flex-wrap justify-center">
          {projectdata.map((data) => {
            return (
              <ProjectCard
                projectImage={data.image}
                projectTitle={data.title}
                projectDescription={data.description}
                projectLink={data.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
