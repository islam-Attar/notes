import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export default function Footer() {

  return (
    <>
      <div className="footer">
        <h3>Social Links</h3>

        <ul>
          <li>
            <a
              href="https://www.youtube.com/"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </ul>

        <p>Copyright &copy; Islam Attar 2022</p>
        
      </div>
    </>
  );
}



