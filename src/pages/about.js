import React from 'react';
import { FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container pb-5">
      <h1 className="text-center mt-5 mb-5">
        <FaCode /> Tanner Hubbert
      </h1>
      <div className="row">
        <img
          className="biopic col-3"
          src="tanner.jpg"
          alt="Tanner Hubbert bio pic"
        />
        <div className="col">
          <p>
            I am a Web Developer located around Oklahoma City. I enjoy building
            custom PC's, coding, cooking, and listening to music. I spend much
            of my free time failing to please my cats 😹. The rest of my time I
            do a subpar job at pleasing the rest of my family 😉.
          </p>
          <p>
            I have a background in customer support, which has helped me to code
            with a focus on the user experience. Though I would consider myself
            primarilly a front end developer, having mostly worked on small
            teams has given me oppurtunities to work across the full stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
