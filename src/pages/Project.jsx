import ProjectCard from "../components/ProjectCard";

const projectdata = [
  {
    title: "LMS Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..",
    image:
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
    link: "https://google.com",
  },
  {
    title: "App Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..",
    image:
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
    link: "https://github.com",
  },
  {
    title: "TS Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..",
    image:
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
    link: "https://github.com",
  },
  {
    title: "Web Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240702155038/How-to-Build-a-Progressive-Web-Apps-(PWAs)-copy-2-Photoroom.webp",
    link: "https://github.com",
  },
];
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
