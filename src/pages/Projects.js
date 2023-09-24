import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();

  return projects.map((project) => (
    <div>
      <h1>{project.name}</h1>
      <img
        src={project.image}
        alt={project.name} 
        style={{
          maxWidth: "100px", 
          maxHeight: "50px", 
        }}
      />
      <div>

      <a href={project.git}>
        <button>Github</button>
      </a>
      </div>
      <div>

      <a href={project.live}>
        <button>live site</button>
      </a>
      </div>
    </div>
  ));
}

export default Projects;
