import React from "react";
const WelcomeMessage = props => {
  return (
    <div>
      <p>Hello <b>{props.name}</b> from welcomeMessage</p>
    </div>
  );
};
export default WelcomeMessage;