import React, { Component, createContext } from "react";
export const POPUP = createContext();

class PopupContext extends Component {
  state = {
    popup: false,
  };

  changePopup = (value) => {
    if (value === true || value === false) {
      this.setState({ popup: value });
    }
  };

  render() {
    return (
      <POPUP.Provider value={{ ...this.state, changePopup: this.changePopup }}>
        {this.props.children}
      </POPUP.Provider>
    );
  }
}

export default PopupContext;
