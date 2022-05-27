// myapp/src/components/Portfolio/index.js
import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
 const [projects] = useState([
    {
      name: 'PickUpSports',
   //   image: <img src={pickUpSportsImage} className="my-2" style={{ width: "100%" }} alt="PickUpSports" />,
      link: 'https://therewillbecode.herokuapp.com',
      GitHub: 'https://github.com/mcleanGit/thereWillBeCode'
    },
    {
      name: 'aCHORDingly',
   //   image: <img src={aCHORDinglyImage} className="my-2" style={{ width: "100%" }} alt="aCHORDingly" />,
      link: 'https://michaelpalumbo.github.io/achordingly',
      GitHub: 'https://github.com/mcleanGit/achordingly'
    },
    {
      name: 'NoteTaker',
    //  image: <img src={noteTakerImage} className="my-2" style={{ width: "100%" }} alt="NoteTaker" />,
      link: 'https://pacific-fjord-94672.herokuapp.com',
      GitHub: 'https://github.com/mcleanGit/TakeNote'
    },
    {
      name: 'Scheduler',
    // image: <img src={schedulerImage} className="my-2" style={{ width: "100%" }} alt="Scheduler" />,
      link: 'https://mcleangit.github.io/scheduler',
      GitHub: 'https://github.com/mcleanGit/scheduler'
    },
    {
      name: 'SecGen-',
   //   image: <img src={calculatorImage} className="my-2" style={{ width: "100%" }} alt="SecGen-" />,
      link: 'https://mcleangit.github.io/SecGen-',
      GitHub: 'https://github.com/mcleanGit/SecGen-'
    },
    {
      name: 'Regex-phonenumbers',
    //  image: <img src={regexImage} className="my-2" style={{ width: "100%" }} alt="regex-gist" />,
      link: ' ',
      GitHub: 'https://gist.github.com/mcleanGit/6d512a0971c0cefb67202806389ff9aa'
    },
    
]);
return (
 <div>
  <div className="flex-row">
    <h2>Portfolio</h2>
   {projects.map((project, idx) =>
    (
     <Project 
     project = {project}
     key={"project" + idx }
     />
    ))}
  </div>
 </div>
 );
};

export default Portfolio;