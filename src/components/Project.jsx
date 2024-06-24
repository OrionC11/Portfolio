const Project = ({ name, description, image, github, link }) => {
  return (
    <div className="projectCard" style={{ backgroundImage: `url(${image})` }}>
      <div className="projectText">
        <h2 className="projectTitle">{name}</h2>
        <p className="projectDescription">{description}</p>
      </div>
      <div className="linkContainer">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="projectLink"
        >
          Github{" "}
        </a>
        <a href={link} target="_blank" rel="noreferrer" className="projectLink">
          Deployed App{" "}
        </a>
      </div>
    </div>
  );
};

export default Project;
