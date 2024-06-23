const Project = ({ name, description, image, github, link }) => {
  return (
    <div className="projectCard" style={{ backgroundImage: `url(${image})` }}>
      <h2 className="projectTitle">{name}</h2>
      <p className="projectDescription">{description}</p>
      <a href={github} target="_blank" rel="noreferrer">
        Github{" "}
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        Deployed App{" "}
      </a>
    </div>
  );
};

export default Project;
