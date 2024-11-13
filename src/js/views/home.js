import React from "react";
import "../../styles/home.css";
import { Contact } from "../component/contact.jsx";
import { Link } from "react-router-dom";


export const Home = () => (
 <div className="container">
    <div className="myHeader col-12 d-flex justify-content-end mt-5 pt-5 pe-4">
      <Link to="/contact/new">
        <button type="button" className="btn btn-success ">
          New contact
        </button>
      </Link>
    </div>
    <div className="text-center container">
      <Contact id={5} fname={'Pepe'} email={'pepe@pepe.com'} phone={'676767676'} address={'pepe str'} />
     
    </div>
  </div>
);
