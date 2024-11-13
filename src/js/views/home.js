import React from "react";
import "../../styles/home.css";
import { Contact } from "../component/contact.jsx";
import { Link } from "react-router-dom";


export const Home = () => (
  <>
    <div className="myHeader col-12  d-flex justify-content-end mt-5 me-5 pt-5 pe-5">
      <Link to="/NewContact">
        <button type="button" className="btn btn-success ">
          New contact
        </button>
      </Link>
    </div>
    <div className="text-center container">
      <Contact />
      <Contact />
      <Contact />
    </div>
  </>
);
