import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="pb-5">
      <div className="container">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item linkedin">
            <a
              href="https://www.linkedin.com/in/tanner-hubbert-39402170/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="list-group-item github">
            <a
              href="https://github.com/tannerhubbert"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="list-group-item email">
            <a
              href="mailto:tannerhubbert@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
