// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading", // attributes
//     xyz: "abc",
//   },
//   "Hello World from React !"
// );

const parent = React.createElement("div",{ id: "parent"}, [
    React.createElement("div", { id: "child",},[
      React.createElement("h1", {}, "Hi this is h1"),
      React.createElement("h2", {}, "Hi this is h2"),
    ]),                                                       // [] - use array for siblings element  
    React.createElement("div", { id: "child",},[
      React.createElement("h1", {}, "Hi this is h1"),
      React.createElement("h2", {}, "Hi this is h2"),
    ])
  ]
);

// JSX

console.log(parent); // object
console.log(React.createElement)

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);
