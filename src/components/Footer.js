import React from "react"

function Footer() {
    return (
        <footer>

            Made with intention by Sabriel Gee
            <br/>
            <ul className="justify-content-center justify-content-space around">
                <li>
                    <a href="https://github.com/sabrielg">
                        <FontAwesomeIcon icon={faGitHub} className="icon-is-large is-active"/>
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sabriel-gee/">
                        <FontAwesomeIcon icon={faLinkedIn} className="icon-is-large is-active"/>
                        </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sabrieltoothtiger/">
                        <FontAwesomeIcon icon={faInstagram} className="icon-is-large is-active"/>
                        </a>
                </li>
                </ul>
            &copy; 2022 Sabriel Gee, llc
        </footer>
    )
}

export default Footer