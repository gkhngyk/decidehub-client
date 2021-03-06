import React, { Component } from "react";
import Button from "../../../AccountLayout/Register/Button/Button";
import PuzzleLogoCheck from "./paylasim-check.svg";

class CongratsShareModal extends Component {
  render() {
    return (
      <div className="flex flex-col pr-3 mt-8">
        <p className="text-2xl text-gray-dark w-1/2 align-left pl-2">
          Tebrikler paylaşımlı oylama oluşturdun!
        </p>
        <div className="flex flex-col justify-center mt-24 px-4">
          <img src={PuzzleLogoCheck} alt="illustration authority" />
          <p className="text-base mt-12 text-gray-dark w-2/3 self-center text-center">
            Bu kadar demokrasi düşkünü olduğun için seni tebrik ederiz.
          </p>
        </div>
        <div className="flex flex-col self-center w-full mt-24">
          <Button
            text="Devam Et"
            onClick={this.props.toggleDrawer("", "right", false)}
          />
        </div>
      </div>
    );
  }
}

export default CongratsShareModal;
