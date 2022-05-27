import React from "react";

function Footer() {
const icons = [
  { 
   name: "GitHub",
   link: "https://github.com/mcleanGit"
  },
  {
    name: "LinkedIn",
   link: "https://www.linkedin.com/in/don-mclean-876040134/"
  },
  {
   name: "Academia",
   link: "https://utoronto.academia.edu/DonMcLean"
  }
]
 return (
  <footer className = "flex-row px-1">
   { icons.map(icon =>
    (
      <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">{ icon.name }</a>
    )
    ) } 

  </footer>
 );
}
export default Footer;