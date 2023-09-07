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


const Restaurantcard = (props) =>{
  console.log(props)
  return (
    <div className="res-card" style = {{ backgroundColor: "#f0f0f0"}}>
      
      <img
        className="res-logo" alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfe5a6b2c186e42811f595e7ebfd7331"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  )
}

const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* For dynamic restuarant card we used Props */}
        <Restaurantcard 
        resName = "Kashif Food"
        cuisine = "Biryani, Burger, North Indian, Asian"
        rating = "4.4"
        time = "38 Minutes"
        />

        <Restaurantcard 
        resName = "KFC"
        cuisine = "Burger, Fast Food"
        rating = "4.4"
        time = "30 Minutes"
        />
      
        
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
