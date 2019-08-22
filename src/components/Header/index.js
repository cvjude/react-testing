import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo192.png";

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
