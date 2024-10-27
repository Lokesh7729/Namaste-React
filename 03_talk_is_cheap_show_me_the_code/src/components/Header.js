import { useState } from "react";
const Header = () => {
  // let btnName = "login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render !");
  return (
    <div className="header">
      <div className="logo-container">Lucky Food ❤️</div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>Menu </li>
          <li>About </li>
          <li>Contact </li>
          <button
            className=" login btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
