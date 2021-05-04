import React, { Component } from "react";

class MyFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="myfooter">
        <p className="foot">
          &copy; {new Date().getFullYear()} Meme Generator. All rights reserved.
          Developed by{" "}
          <a href="https://justice.zerone.co.ke" target="_blank">
            Justice Towett
          </a>
        </p>
      </div>
    );
  }
}

export default MyFooter;
