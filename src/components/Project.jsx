const Project = ({ name, description, image, github, link }) => {
  return (
    <div className="projectCard">
      <img src={image} alt={description}></img>
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
          <i className="fab fa-github"></i>
        </a>
        <a href={link} target="_blank" rel="noreferrer" className="projectLink">
          <i className="fas fa-globe"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
