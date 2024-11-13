import React from "react";
import { Link } from "react-router-dom";
import contactImgOne from "../../img/iconContactOne.jpg";

export const Contact = () => {
  return (
    <div className="container row  d-flex justify-content-between align-center border border-secondary rounded my-5">
      <div class="card-body d-flex text-start ">
        <img
          className="col-3 col-sm-2 img-fluid"
          src={contactImgOne}
          alt="..."
        />
        <div className="col-7 col-sm-6 ms-4">
          <h3 className="mt-2">Mike Anamendolla</h3>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-location-dot">
            </span> 58742 Hillcrest Rd
          </p>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-phone"></span> (870) 288-4149
          </p>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-envelope"></span> mike.ana@example.com
          </p>
        </div>

        <div className="col-3 col-sm-4 text-end me-4 pe-5 mt-2">
          <span class="fa-solid fa-pen mx-1 text-secondary"></span>
          <span class="fa-solid fa-trash mx-1 text-secondary"></span>
        </div>
      </div>
    </div>
  );
};
