import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MyImage from "../images/David1.png";
import Projects from "./projects";
import About from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }} className="stack">
        <Grid
          className="landing-grid"
          style={{
            background:
              "url(https://lovinlife.com/wp-content/uploads/2019/01/Detroit-Skyline-at-Night.jpg) center / cover"
          }}
        >
          <Cell col={12}>
            <img
              src={MyImage}
              alt="david"
              className="david-image"
              id="profile-pic"
            />
          </Cell>

          <div className="banner-text" id="banner">
            <h1>Full Stack Developer</h1>
            <hr />
            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Postgres</p>
            <div className="social-links">
              {/*LinkedIn*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Github*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/*Twitter*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default Landing;
