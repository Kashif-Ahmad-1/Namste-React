import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact US</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
};


const Restaurantcard = () =>{
  return (
    <div className="res-card" style = {{ backgroundColor: "#f0f0f0"}}>
      
      <img
        className="res-logo" alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfe5a6b2c186e42811f595e7ebfd7331"
      />
      <h3>Kashif Food</h3>
      <h4>Biryani, Burger, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 Minutes</h4>
    </div>
  )
}

const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        
      </div>
    </div>
  );
};




const AppLayout = () => {
  return (
  <div className="app">
    <Header />
    <Body />
  </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
