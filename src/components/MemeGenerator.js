/** @format */

import React, { Component } from "react";

class MyMeme extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    //ensure that data is fetched at the beginning
    fetch("https://api.imgflip.com/get_memes") //call to URL
      .then((response) => response.json()) //turn promise into JS object
      .then((data) => {
        this.setState({ allMemeImgs: data }); // set allMemeImgs state
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const myArray = this.state.allMemeImgs.data.memes;
    this.setState({
      randomImg: myArray[Math.floor(Math.random() * myArray.length)].url,
    });
  };

  render() {
    return (
      <div className="row mymeme">
        <div className="col-md-6 offset-md-3">
          <div
            style={{
              border: "3px solid black",
              marginBottom: "3em",
              textAlign: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>{this.state.topText}</h1>
            <img src={this.state.randomImg} />
            <h1 style={{ textAlign: "center" }}>{this.state.bottomText}</h1>
          </div>
          <div className="text-center">
            <input
              className="form-control"
              type="text"
              value={this.state.topText}
              name="topText"
              placeholder="Top text"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="form-control"
              type="text"
              value={this.state.bottomText}
              name="bottomText"
              placeholder="Bottom Text"
              onChange={this.handleChange}
            />
            <br />
            <button className="mybutton" onClick={this.handleClick}>
              Generate Meme
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMeme;
