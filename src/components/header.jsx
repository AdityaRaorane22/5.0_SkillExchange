import React from "react";
// import '../../public/css/style.css'; // Import the CSS file for styling

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <video autoPlay muted loop className="background-video">
          <source src="https://videos.pexels.com/video-files/3209298/3209298-sd_640_360_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

