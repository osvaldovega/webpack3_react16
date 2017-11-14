import React from 'react';  // eslint-disable-line
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className={'aboutpage'}>
      <div>
        <h1>About page</h1>
        <Link to="/">Home Page</Link>
      </div>
    </section>
  );
};

export default AboutPage;
