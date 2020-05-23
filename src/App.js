import React, { Component } from "react";
import ArrowDown from "./icons/arrowdown.png";
import CV from "./icons/cv.png";
import Twitter from "./icons/twitter.png";
import Phone from "./icons/phone.png";
import Mail from "./icons/mail.png";
import LinkedIn from "./icons/linkedin.png";
import Github from "./icons/github.png";
import Stackoverflow from "./icons/stackoverflow.png";
import Bag from "./icons/bag.png";
import Send from "./icons/send.png";
import { Link } from "react-scroll";

export default class App extends Component {
  state = {
    thelink: "mailto:eionkrauthammer@gmail.com?subject=&body=",
    input1: "",
    input2: "",
  };

  handleInput1 = (e) => {
    this.setState({
      input1: e.target.value,
      thelink: `mailto:eionkrauthammer@gmail.com?subject=the${this.state.input1}+&body=${this.state.input2}`,
    });
  };

  handleInput2 = (e) => {
    this.setState({
      input2: e.target.value,
      thelink: `mailto:eionkrauthammer@gmail.com?subject=${this.state.input1}&body=${this.state.input2}`,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="head">
          <div className="head-inner">
            <p className="head-name">Eilon Krauthammer</p>
            <p className="head-title">iOS Developer</p>
            <div className="head-flex">
              <a
                className="head-link"
                href="https://docs.google.com/document/d/1rePVwwhht_5Rmc9EQQJ2P_Y0kbT0qEm-DBJlYODDi6A/edit?usp=sharing"
              >
                <img src={Bag} alt="img" className="head-link-img" />
                Portfolio
              </a>
              <p className="head-line">|</p>
              <a className="head-link" href="mailto:eionkrauthammer@gmail.com">
                <img src={Mail} alt="img" className="head-link-img" />
                Contact
              </a>
            </div>
            <Link to="scrollbottom" smooth={true} duration={1000}>
              <p className="head-more">Show More</p>
              <img src={ArrowDown} className="head-arrow" alt="img" />
            </Link>
          </div>
        </div>
        <div className="rest">
          <div className="rest-inner">
            <p className="rest-blue">Hi, I'm Eilon.</p>
            <p>
              I am a software developer specializing in native
              <br /> iOS development and UX/UI design.
            </p>
            <div className="rest-flex">
              <a className="rest-icn-p" href="tel:+972 503-796-736">
                <img src={Phone} className="rest-icn" alt="img" />
              </a>
              <a className="rest-icn-p" href="mailto:eionkrauthammer@gmail.com">
                <img src={Mail} className="rest-icn" alt="img" />
              </a>
              <p className="rest-line">|</p>
              <a className="rest-icn-p" href="https://twitter.com/mitleyber">
                <img src={Twitter} className="rest-icn" alt="img" />
              </a>
              <a
                className="rest-icn-p"
                href="https://www.linkedin.com/in/eilon-krauthamer-6b2b44113/"
              >
                <img src={LinkedIn} className="rest-icn" alt="img" />
              </a>
              <p className="rest-line">|</p>
              <a className="rest-icn-p" href="https://github.com/eilonkr">
                <img src={Github} className="rest-icn" alt="img" />
              </a>
              <a
                className="rest-icn-p"
                href="https://stackoverflow.com/users/4127258/eilon"
              >
                <img src={Stackoverflow} className="rest-icn" alt="img" />
              </a>
            </div>
            <a href="https://drive.google.com/file/d/19QHwXJjbn6rCo4xLUDEGLrnMO8Gzmt4y/view">
              <p className="rest-cv-p">
                <img
                  src={CV}
                  className="rest-cv"
                  alt="img"
                  style={{ padding: "0.5em 1.3em " }}
                />
            </p>
            </a>
            <div className="rest-div-line"></div>
            <p className="rest-reach">Reach out to me</p>
            <div className="rest-input-area">
              <input
                className="rest-input"
                type="text"
                placeholder="Name / Contact reason"
                onChange={this.handleInput1}
              />
              <br />
              <textarea
                className="rest-textarea"
                type="text"
                placeholder="Message"
                onChange={this.handleInput2}
              />
            </div>
            <a href={this.state.thelink}>
              <button className="rest-send">
                Send
                <img src={Send} alt="img" className="rest-send-img" />
              </button>
            </a>
            <p className="copyright" id="scrollbottom">
              © Copyright Eilon Krauthammer 2020.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
