import React from 'react';
import authorImage from '../../assets/mclean.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About</h1>
      <img src={authorImage} className="my-2" style={{ width: "100%" }} alt="author" />
      <div className="my-2">
        <p>
        Don McLean is Professor of Music Theory and Musicology at the University of Toronto. 
        He was awarded the Queen Elizabeth II Diamond Jubilee Medal through the Canada Council in 2012 for his [ i3/3i ]:
         “exploration of the changing context of music in the academy and society, and innovations in infrastructure development and interdisciplinary teaching and research.” 
         He served as Dean of UofT Music from January 2011 through June 2021 and as Dean of the Schulich School of Music of McGill University from 2001 to 2010. 
         His recently renewed interest in coding stems from his music theory research and his longtime management of interdisciplinary and infrastructure development projects, 
         such as DM@X--Digital Media at the Crossroads and other technology-driven initiatives.

        </p>
      </div>
    </section>
  );
}

export default About;
