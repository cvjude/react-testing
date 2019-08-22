import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo192.png";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
