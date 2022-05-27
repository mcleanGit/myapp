// myapp/src/components/Project/index.js
import React from 'react'; 

function Project ({ project }) {
  const { name, link, GitHub } = project; 

  return (
    <div>
     <img src={require(`../../assets/${name}.jpg`)} alt={name} className="project-bg" />
    <div className = "project-text">
      <h3><a href={link}>{name}</a></h3>
      <h3><a href={GitHub} ><i className= "fab fa-github"></i></a></h3>  
    </div>
    </div>
  ); 
};

export default Project;
