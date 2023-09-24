import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData();

  return (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <img
        src={about.headshot}
        alt="Profile Headshot"
        style={{
          maxWidth: "500px", 
          maxHeight: "500px", 
        }}
      />
      <p>{about.bio}</p>
    </div>
  );
}

export default About;
