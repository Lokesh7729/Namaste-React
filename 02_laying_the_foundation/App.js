import React from "react";
import ReactDOM from "react-dom/client";

// React Element ->
const heading = React.createElement(
  "div",
  {
    // object go as attribute
    id: "heading",
  },
  "Hey this is React 🚀 "
); // react element is JS object

// When we render this element to dom then it becomes a HTML element

// JSX -> is not html in javascript /html like syntax or xml type
// (Transpiled before it reaches the JS ) -> Parcel -> BABEL

// JSX=> React.createElement => ReactElement -JS OBJECT => HTML

const jsxPara = (
  <p className="para" tabIndex={1}>
    Namaste like JSX 🤡 !
  </p>
); //This code is converted to react.createElement

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// react functional component

const Title = () => {
  return <h1 className="title">Namaste React 👽 </h1>; // using return keyword
};

const number = 1000;
const span= <span>This is a span</span>

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2 className="head">Namaste React Functional Component </h2>
    {heading}
    <h2>{number + 100 + 130}</h2>
    {jsxPara}
    {span}
    {Title() /* we can call a function inside this  */}
  </div>
);

root.render(<HeadingComponent />);
