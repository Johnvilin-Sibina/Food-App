import React from "react";

function Fooditem() {
  return (
    <>
      <div className="col-lg-4">
        <img
          src="https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg"
          className="img-fluid rounded-circle"
          alt=""
        />
      </div>
      <div className="col-lg-8">
        <h2>Food Name</h2>
        <h4>Rs. 100</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          voluptatem voluptate incidunt harum eius cumque blanditiis facilis ex
          libero minima magni asperiores et voluptas, quibusdam repudiandae
          numquam.
        </p>
      </div>
    </>
  );
}

export default Fooditem;
