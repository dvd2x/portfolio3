import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterLinkList,
  FooterSection
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                David Piper
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                David Piper
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>

          <Footer className="header-color" size="mini">
            <FooterSection type="left" logo="Title">
              <FooterLinkList>
                <Link to="/">Help</Link>
                <Link to="/">Privacy & Terms</Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
