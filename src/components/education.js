import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Cell>
          <Cell col={8} style={{marginTop:'0px'}}>
              <h4>{this.props.schoolName}</h4>
              <p>{this.props.schoolDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
