import "../../styles/Portfolio.css";
import miso from "../../styles/miso.png"
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="top1Section">
        <div className="skills">
          <img src="./altIcons/icons8-mysql-24.png"></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div className="projectsTop">
          <div className="card">
            <img src={miso} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Social Network API</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
               Git Code
              </a>
            </div>
          </div>
          <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">E-Commerce Back End</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
               Git Code
              </a>
            </div>
          </div>
          <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Secret Santa Website</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
               Git Code
              </a>
            </div>
          </div>
          <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Office SQL Database</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
               Git Code
              </a>
            </div>
          </div>
          
        </div>
        <div className="associatedText">
          <p>Some Text</p>
        </div>
      </div>
      <div className="top2Section">
        <div className="skills2">
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div className="projectsBot">
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
