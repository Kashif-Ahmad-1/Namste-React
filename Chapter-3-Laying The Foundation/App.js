import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX --> is not HTML in JS
// JSX ==>Babel transpiles to React.createElement ==> Object ==> HTMLElement(render)

// if code contains only one line then dont wrap with this bracket


const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
); 


// Manadatory to use () for multiple line

// {both heading and jsxHeading are same only written in Different way}

// React Component
// Class Based Component - OLD
// Functional Component - New

const Titles = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
); 

// it will pass through <Title />

const ele = <span>React element</span>

const title = (
  <h1 className="head" tabIndex="5">
    {ele}  Namaste React using JSX
  </h1>
); 

// it will pass through {title}

const number = 10000;
// React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* <Titles />   */}
      {/* all code of title comes here */}
      {/* <h2>{number}</h2> */}
      {/* Any part of javadcript works here */}

      {title}
      <h1 className="head" tabIndex="5">
        Namaste React using Functional Component
      </h1>
    </div>
  );
};

// Another Syntax
const HeadingComponent2 = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using Functional Component 2
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
