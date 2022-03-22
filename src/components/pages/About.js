import React from 'react';
import photo from "../../assets/elements/copy_489323067.png"



export default function About() {
  return (
    <div>
      <h1>hi it's me</h1>
      <p>
      A web designer with a background in <br/>
                nonprofit work and project management, <br/>
                 I design and code thoughtfully; <br/>
                 keeping real people at the center of my work.<br/>
                 I believe good design is inclusive and accessible for all.
                 <div className="bio-photo">
              {" "}
              <img src={photo} alt="something here"/>{" "}
            </div>
      </p>
    </div>
  );
}
