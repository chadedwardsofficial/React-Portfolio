import "../../styles/aboutme.css";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="top1Section">
        <div className="skills">
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div className="projectsTop">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
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
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
