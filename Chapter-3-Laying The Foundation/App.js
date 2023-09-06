import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX --> is not HTML in JS
// JSX ==> React.createElement ==> Object ==> HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// {both heading and jsxHeading are same only written in Different way}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);
