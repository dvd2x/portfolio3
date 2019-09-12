import React, { Component } from "react";
import { Grid, Cell, ListItem, List, ListItemContent } from "react-mdl";
import DavidImage from "../images/David2.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <h2>Contact Me</h2>
        <hr />
        <Grid className="contact-grid">
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (313) 848-6804
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    float: "right"
                  }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  piperd@comcast.net
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                  black.god1930
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contact;
