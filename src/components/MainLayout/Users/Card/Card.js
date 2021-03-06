import React, { Component } from "react";
import MenuLogo from "../menu.svg";

class Card extends Component {
  render() {
    return (
      <div className="bg-white py-5 border border-gray-light m-5">
        {this.props.editable && (
          <img
            src={MenuLogo}
            alt="menu logo"
            className="ml-auto mr-5"
            onClick={() => this.props.editUser(this.props.id)}
          />
        )}
        <div className="flex flex-col items-center">
          <img
            src={this.props.imgLink}
            alt="profile pic"
            className="rounded-full w-40 h-40"
          />
          <div>
            <div className="p-2 md:p-4 flex flex-col text-center">
              <h3 className="text-xl text-gray-dark">
                {this.props.name}
                {this.props.active || ` (Onay Bekliyor)`}
              </h3>
              <p className="text-sm lg:text-base text-gray-text">
                Başlangıç Yetki Puanı: {this.props.initialAuthorityPercent}
              </p>
              <p className="text-sm lg:text-base text-gray-text py-5">
                {this.props.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
