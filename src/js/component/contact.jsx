import React from "react";
import { Link } from "react-router-dom";
import contactImgOne from "../../img/iconContactOne.jpg";

export const Contact = ({id, name, address, email, phone}) => {
  return (
    <div className="container row  d-flex justify-content-between align-center border border-secondary rounded my-5">
      <div class="card-body d-flex text-start ">
        <img
          className="rounded col-3 col-md-2"
          src={contactImgOne}
          alt="..."
        />
        <div className="col-7 col-sm-6 ms-4">
          <h3 className="mt-2">{name}</h3>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-location-dot"></span> {address}
          </p>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-phone"></span> {phone}
          </p>
          <p className="my-1 text-secondary">
            <span className="fa-solid fa-envelope"></span> {email}
          </p>
        </div>

        <div className="col-3 col-sm-4 text-end me-4 pe-5 mt-2">
          <Link to={'/contact/' + id} class="fa-solid fa-pen mx-1 text-secondary"></Link>
          <span class="fa-solid fa-trash mx-1 text-secondary"></span>
        </div>
      </div>
    </div>
  );
};
