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
    {
      name: "Just Another Text Editor",
      description: "just another text editor for writing javascript",
      image: "/JATE.png",
      github: "https://github.com/OrionC11/JustAnotherTextEditor",
      link: "https://justanothertexteditor-a8fi.onrender.com",
    },
    {
      name: "Weather Dashboard",
      description:
        "A dashboard for looking up the current weather as well as a 5 day forecast",
      image: "/WeatherDashboard.png",
      github: "https://github.com/OrionC11/WeatherDashboard",
      link: "https://orionc11.github.io/WeatherDashboard/",
    },
    {
      name: "Work Day Scheduler",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day",
      image: "/WorkDayScheduler.png",
      github: "https://github.com/OrionC11/WorkDaySchedule",
      link: "https://orionc11.github.io/WorkDaySchedule/",
    },
    {
      name: "Password Generator",
      description:
        "An application that generates a random password based on user-selected criteria",
      image: "/PasswordGenerator.png",
      github: "https://github.com/OrionC11/PasswordGenerator",
      link: "https://orionc11.github.io/PasswordGenerator/",
    }
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
