import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">LOGO</div>
          <nav className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="clear" />
        </div>
      </header>
    );
  }
}

export default Header;
