import { useEffect, useState } from "react";
const Header = () => {
  // let btnName = "login";

  // if no dependency array => use effect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => called evertime btnNameReact changes
  
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render !");

  useEffect(() => {
    console.log("use effect called !");
  },[btnNameReact]);

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
