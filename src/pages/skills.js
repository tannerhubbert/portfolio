import React from 'react';
import { DiPhp } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiAws } from 'react-icons/di';
import { DiDocker } from 'react-icons/di';
import { DiGithub } from 'react-icons/di';
import { DiPhotoshop } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaSketch } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="container pb-5">
      <h1 className="container text-center mt-5 mb-5">My Skills:</h1>
      <div className="skills-container">
        <ul className="row">
          <li className="list-group-item col-3">
            PHP <DiPhp />
          </li>
          <li className="list-group-item col-3">
            SQL Database Management <DiMysql />
          </li>
          <li className="list-group-item col-3">
            JavaScript <DiJavascript />
          </li>
          <li className="list-group-item col-3">
            SCSS <DiSass />
          </li>
          <li className="list-group-item col-3">
            React <DiReact />
          </li>
          <li className="list-group-item col-3">
            AWS <DiAws />
          </li>
          <li className="list-group-item col-3">
            Docker <DiDocker />
          </li>
          <li className="list-group-item col-3">
            Git <DiGithub />
          </li>
          <li className="list-group-item col-3">
            typeScript <BiLogoTypescript />
          </li>
          <li className="list-group-item col-3">
            Photoshop <DiPhotoshop />
          </li>
          <li className="list-group-item col-3">
            Sketch <FaSketch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
