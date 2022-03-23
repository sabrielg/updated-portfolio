import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      Made with intention by Sabriel Gee
      <br/>
        <a className="px-2" href="https://github.com/sabrielg">
            <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className="px-2" href="https://www.linkedin.com/in/sabriel-gee/">
        <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="px-2" href="https://www.instagram.com/sabrieltoothtiger/">
        <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <br/>
      &copy; 2022 Sabriel Gee, llc
    </footer>
  );
}

export default Footer;
