import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/2304/1*Tgn8ZHDoG_ySzUp5ZPxa2w.jpeg) center / cover"
              }}
            >
              HTML/CSS Project #1
            </CardTitle>
            <CardText>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/2304/1*Tgn8ZHDoG_ySzUp5ZPxa2w.jpeg) center / cover"
              }}
            >
              HTML/CSS Project #2
            </CardTitle>
            <CardText>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/2304/1*Tgn8ZHDoG_ySzUp5ZPxa2w.jpeg) center / cover"
              }}
            >
              HTML/CSS Project #3
            </CardTitle>
            <CardText>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is API</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <h2>Recent Projects</h2>
        <hr />
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>API</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
