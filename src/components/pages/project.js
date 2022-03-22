import React from "react";
import '../../../src/App.css'

function Project() {
  const Project = [
    {
      title: "Planet Express.js",
      photo: "planet-logo-portfolio",
      link: "https://planet-express-js.herokuapp.com/",
      gitHub: "https://github.com/mhowitz/planet-express-js",
      text: "A resource directory for all of your coding needs!"
    },
    {
      title: "Brew Hops",
      photo: "Brew_Hops_",
      link: "https://sabrielg.github.io/Brew-Hops/",
      gitHub: "https://github.com/sabrielg/Brew-Hops",
      text: "An interactive brewery map of Salt Lake City."
    },
    {
      title: "First Portfolio",
      photo: "Sabriel_Gee",
      link: "https://sabrielg.github.io/Challenge-2-portfolio/",
      gitHub: "https://github.com/sabrielg/Challenge-2-portfolio",
      text: "My first project and portfolio of coding work."
    },
  ];
  return (
    <section className="flex-row d-flex mt-3">
      {Project.map((image, i) => (
        <div key={i} className="card mx-3" style={{height:"550px", objectFit:"cover"}}>
          <h3>{image.title}</h3>
          <img
            src={require(`../../assets/elements/${image.photo}.jpg`)}
            alt={image.title}
            key={image.photo}
            height="350px"
            width="410px"
          />
          <a className="btn from-top" href={image.link}>Check it</a>
          <a className="btn from-top" href={image.gitHub}>GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Project;
