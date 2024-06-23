import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "OnlyTasks",
      description: "An application to track todo tasks in a business",
      image: "/ScreenshotHome.png",
      github: "https://github.com/OrionC11/OnlyTasks",
      link: "https://onlytask2-ce6dcad66213.herokuapp.com",
    },
    {
      name: "Meowmories",
      description: "An application to keep track of your meow moments",
      image: "/Meowmories.png",
      github: "https://github.com/OrionC11/Meowmories",
      link: "https://boiling-lake-99870-5122afeca48a.herokuapp.com",
    },
  ];
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projectContainer">
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
