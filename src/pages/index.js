import React from 'react';

const Home = () => {
  return (
    <div className="container pb-5">
      <h1 className="text-center mt-5 mb-5">Welcome to my portfolio.</h1>
      <p className="pb-4">
        You can click the links above to learn more about me, see a few examples
        of my work, see some of my skills, or you can listen to some music I
        think you will like. If none of that sounds good you can stare at my
        cats for a while.
      </p>
      <img className="cats" src="./cats2.jpg" alt="my cats" />
    </div>
  );
};

export default Home;
