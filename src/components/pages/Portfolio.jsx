import "../../styles/Portfolio.css";
import socialnetwork from "../../styles/socialapi.png";
import ecommerce from "../../styles/ecommcerce.png";
import office from "../../styles/office.png";
import sql from "./altIcons/icons8-mysql-24.png";
import mongoDB from "./altIcons/icons8-mongo-db-96.png";
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="header">Personal Projects</div>
      <div className="projectsTop">
        <div className="card">
          <img src={socialnetwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Social Network API</h5>
            <p className="card-text">
              Back End Database using NoSQL Database MongoDB. Demo via insomnia
              displaying routes. CRUD Routes.
              <ul>
                <li>NoSQL</li>
                <li>Express</li>
              </ul>
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
        <div className="card">
          <img src={ecommerce} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-Commerce Back End</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">README Generator</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
        <div className="card">
          <img src={office} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Office SQL Database</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
        <div className="card">
          <img src={office} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Office SQL Database</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
      </div>
      <div><p>Skills</p></div>
      <div className="skills">
       
        <div className="skillBox">
          <img src={sql} className="sql" />
          <p>MySQL</p>
        </div>

        <div className="skillBox">
          <img src={mongoDB} className="mongoDB" />
          <p>MongoDB</p>
        </div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="bottomtext">Collaborative Projects</div>
      <div className="top2Section">
        <div className="skills2">
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div className="projectsBot"></div>
      </div>
    </div>
  );
};

export default Portfolio;
