import React from 'react';

const Examples = () => {
  return (
    <div className="container pb-5">
      <h1 className="text-center mt-5 mb-5">Recent Work Examples</h1>

      <div className="examples row">
        <span className="col-4">
          <a
            href="https://www.lazarus-demo.website/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./ex1.png" alt="ex 1" />
            <button className="btn btn-primary">visit example</button>
          </a>
        </span>
        <span className="col-4">
          <a
            href="https://www.barnabas-demo.website/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./ex2.png" alt="ex 2" />
            <button className="btn btn-primary">visit example</button>
          </a>
        </span>
        <span className="col-4">
          <a
            href="https://www.disciple-demo.website/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./ex3.png" alt="ex 3" />
            <button className="btn btn-primary">visit example</button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Examples;
