import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
     
      <div className="container" id="b">
        <h1 className="veg">
          About <span>us</span>
        </h1>
        <div className=" row mt-5">
          <div className="col col-lg-6 ">
            <div>
              <h3>Best Vegetables Shop</h3>
              <p className="p">
                In this fast-paced, heavy-scheduled life, most people do not get
                enough time to shop the old way. We, at V.Shop, are here to
                make your life simpler by providing shopping at a click. With a
                vision to deliver quality products at affordable prices, we aim
                to provide fresh, best-quality, branded products to customers
                easily. This is made possible by sourcing directly from our
                network of manufacturers and producers to your doorsteps. We do
                not compromise when it comes to quality. Currently, V.Shop
                delivers grocery and staples, snacks and branded food, dairy and
                bakery, beverages, bath beauty, and personal care, household and
                cleaning, covid essentials, fresh farm fruits, and vegetables at
                your doorstep at a click. Whether you are at home or the office,
                you can order whenever you want and leave the task on us. Our
                Xpress delivery and different delivery slots allow you to buy
                and get the products delivered to your doorstep at your
                convenience.
              </p>
            </div>
          </div>
          <div className="vg col-lg-6  ">
            <div>
              <figure>
                <img src="https://ezzattech.com/sites/veg/images/v1.jpg"></img>
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
          <div className="vg col-lg-6  ">
            <div>
              <figure>
                <img src="https://ezzattech.com/sites/veg/images/v2.jpg"></img>
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
          <div className="col col-lg-6 ">
            <div>
              <p className="p">
                V.Shop completely alters your experience of purchasing. With a
                few clicks, you can order online thereby avoiding traffic jams
                on your way to the store, no parking, carrying heavy bags back
                home. In addition to this, you also save time spent on the
                billing lines. We save not only your precious time but also your
                hard-earned money by offering you products at the lowest rates
                possible. In addition to this, we also provide products with
                deals, offers, and discounts. Simply put, we care for your
                budget and it is reflected in our pricing. Reap the benefits of
                ordering the best quality products from V.Shop at great offers
                and discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
