import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import DavidImage from "../images/David2.png";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resume">
          <h2>Work/Education</h2>
          <hr />
          <Grid>
            <Cell col={4} className="resume-left">
              <div style={{ textAlign: "center" }}>
                <img
                  src={DavidImage}
                  alt="David"
                  style={{ height: "300px", borderRadius: "10%" }}
                />
              </div>
              <h2 style={{ paddingTop: "2em" }}>David Piper</h2>
              <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
              <hr style={{ borderTop: "3px solid #000120", width: "50%" }} />
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>
              <hr style={{ borderTop: "3px solid #000120", width: "50%" }} />
              <h5>Address</h5>
              <p>18093 Parkside St, Detroit MI 48221</p>
              <h5>Phone</h5>
              <p>(313) 848-6804</p>
              <h5>Email</h5>
              <p>piperd@comcast.net</p>
              <h5>Web</h5>
              <p>AvailableGeeks.com</p>
              <p className="download">
                <button>
                  <a
                    class="button"
                    target="_blank"
                    href="https://docs.google.com/document/d/1nqD8rLYoO8H9eMO64VXku66eBCq8g34GuzXB4r2dzCs/edit"
                  >
                    <i class="fa fa-download"></i> Download Resume
                  </a>
                </button>
              </p>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Education
                startYear={1998}
                endYear={2000}
                schoolName={"Delaware State University"}
                schoolDescription="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."
              />

              <Education
                startYear={1996}
                endYear={1998}
                schoolName={"Delaware Technical & Community College"}
                schoolDescription="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;"
              />
              <hr style={{ borderTop: "3px solid #fff" }} />
              <h2>Experience</h2>

              <Experience
                startYear={2019}
                endYear={"present"}
                jobName="Thinkful"
                jobDescription="Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures. Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer."
              />

              <Experience
                startYear={2016}
                endYear={"present"}
                jobName="Gp Strategies"
                jobDescription="Reviewed performance reports and documentation from customers and field engineers, and completed root cause analysis on trucks, assembly procedure, and test equipment. Inspected malfunctioning and damaged products to determine problem. Given support to plant assembly management for electrical quality control issues."
              />
              <hr style={{ borderTop: "3px solid #fff" }} />
              <h2>Skills</h2>
              <Skills skill="HTML/CSS" progress={95} />
              <Skills skill="NodeJS" progress={65} />
              <Skills skill="Javascript" progress={40} />
              <Skills skill="React" progress={35} />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
