import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="h r row mt-5">
          <div className="wc  col-lg-6 col-md-12 col mt-4">
            <span className="mt-3"> Welcome To V.Shop </span>
            <h1>Vegetables Shop </h1>
            <h2 className="mt-5">
              VShop Is The Only Online Supermarket You Need. Buy Fruits,
              Veggies, Snacks, Milk & More. Daily Needs Delivered To Your Home
              Faster Than Supermarkets, Only On VShop. Shop Now. 
            </h2>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Vegetable"
                aria-label="Search"
              />
              <button className="btn-lg" type="submit">
                Search
              </button>
            </form>
            <div className="mt-3" id="btn">
              <button
                className="btn-lg"
                type="submit"
                onClick={() => navigate("contact Us")}
              >
                Contact Us
              </button>
              <button
                className="btn-lg"
                type="submit"
                onClick={() => navigate("vegetable")}
              >
                Vegetable
              </button>
            </div>
          </div>
          <div className="px-3 col col-lg-6 col-md-12 col-sm-12 ">
            <img src="https://ezzattech.com/sites/veg/images/img2.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
