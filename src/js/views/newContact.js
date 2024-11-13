import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { ContactForm } from "../component/contactForm.jsx";
import { Link } from "react-router-dom";
import "../../styles/demo.css";


export const NewContact = () => {
  return (
    <>
     <div className="myHeader col-12 col-sm-10 d-flex justify-content-end mt-5 pe-2 pt-5">
      <Link to="/">
        <button type="button" className="btn btn-success ">
        <span class="fa-solid fa-left-long"></span>
        </button>
      </Link>
    </div>
    <ContactForm />
    </>
  
  );
};
