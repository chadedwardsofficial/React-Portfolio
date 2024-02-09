import "../../styles/Portfolio.css";
import socialnetwork from "../../styles/socialapi.png";
import ecommerce from "../../styles/ecommcerce.png";
import office from "../../styles/office.png";
import readME from "../../styles/readMe.png";
import svg from "../../styles/svg.png";
import secretsanta from "../../styles/secretsanta.png"
import cinemaDB from "../../styles/cinemaDB.png"
import sql from "./altIcons/icons8-mysql-24.png";
import mongoDB from "./altIcons/icons8-mongo-db-96.png";
import bootstrap from "./altIcons/bootstrap.png";
import graphQL from "./altIcons/graphQL.png";
import nodejs from "./altIcons/nodejs.png";
import javas from "./altIcons/javas.png";
import html from "./altIcons/html.png";
import css from "./altIcons/css.png";
import jquery from "./altIcons/jquery.png";
import agile from "./altIcons/agile.png";
import heroku from "./altIcons/heroku.png";
import express from "./altIcons/express.png"

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="header">Personal Projects</div>
      <div className="projectsTop">
        <div className="card">
          <img src={socialnetwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Social Network API</h3>
            <p className="card-text">
              Back End Database using NoSQL Database MongoDB. Demo via insomnia
              displaying routes. CRUD Routes.
              <div className="listedSkills">
                <ul>
                  <li>MongoDb</li>
                  <li>Express</li>
                  <li>Javascript</li>
                  <li>Insomnia</li>
                </ul>
              </div>
            </p>
            <a href="https://github.com/chadedwardsofficial/Social-Network-API" target="_blank" className="btn btn-primary">
              Git Code
            </a>
            <a href="https://drive.google.com/file/d/15R8a21XI2WqRwRJQ-O9QMwKf3ljK1apW/view"
            target="_blank" className="btn demo btn-primary">
             Watch Demo
            </a>
          </div>
        </div>
        <div className="card">
          <img src={ecommerce} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">E-Commerce Back End</h3>
            <p className="card-text">
              Baseline demonstration for an E-Commerce Back End database using
              Sequelize CRUD Routes.
            </p>
            <a href="#" className="btn btn-primary">
              Git Code
            </a>
          </div>
        </div>
        <div className="card">
          <img src={readME} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">README Generator</h3>
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
            <h3 className="card-title">Office SQL Database</h3>
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
          <img src={svg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">SVG Logo Generator</h3>
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
      <div className="skillHeader">
        <p>Skills</p>
      </div>
      <div className="skills">
        <div className="skillBox">
          <img src={sql} className="icon" />
          <p>MySQL</p>
        </div>

        <div className="skillBox">
          <img src={mongoDB} className="icon" />
          <p>MongoDB</p>
        </div>
        <div className="skillBox">
          <img src={bootstrap} className="icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skillBox">
          <img src={graphQL} className="icon" />
          <p>GraphQL</p>
        </div>
        <div className="skillBox">
          <img src={nodejs} className="icon" />
          <p>Nodejs</p>
        </div>
        <div className="skillBox">
          <img src={javas} className="icon" />
          <p>Javascript</p>
        </div>
        <div className="skillBox">
          <img src={html} className="icon" />
          <p>HTML</p>
        </div>
        <div className="skillBox">
          <img src={css} className="icon" />
          <p>CSS</p>
        </div>
        <div className="skillBox">
          <img src={jquery} className="icon" />
          <p>jQuery</p>
        </div>
        <div className="skillBox">
          <img src={agile} className="icon" />
          <p>Agile Development</p>
        </div>
        <div className="skillBox">
          <img src={heroku} className="icon" />
          <p>Heroku</p>
        </div>
        <div className="skillBox">
          <img src={express} className="icon" />
          <p>Express</p>
        </div>
      </div>
      <div className="bottomtext">Collaborative Projects</div>
      <div className="bottomProjects">
        <div className="card">
          <img src={secretsanta} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Secret Santa</h3>
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
          <img src={cinemaDB} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">CinemaDB</h3>
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
    </div>
  );
};

export default Portfolio;
