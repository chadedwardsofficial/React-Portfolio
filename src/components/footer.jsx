import React from "react";
import '../styles/footer.css';

import linkedin from "./pages/altIcons/linkedin.png"
import github from "./pages/altIcons/Github.png"


export default function footer() {

  return (
<div className="footerSection">
      <div className="links">
      <a href="https://github.com/chadedwardsofficial"
            target="_blank" className="link">
            <img src={github}></img></a> 
            <a href="https://github.com/chadedwardsofficial"
            target="_blank" className="link"> <p>GitHub</p> </a>
            </div>
            <div className="links">
            <a href="https://www.linkedin.com/in/chadedwardsofficial/"
            target="_blank" className="link">
            <img src={linkedin}></img></a> 
            <a href="https://www.linkedin.com/in/chadedwardsofficial/"
            target="_blank" className="link"><p>LinkedIn</p> </a>
            </div>
   

</div>


  )



}