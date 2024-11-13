import React, { useContext } from "react";
import "../../styles/home.css";
import { Contact } from "../component/contact.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Home = () => {
  const {store, actions} = useContext(Context)

  return (
    <div className="container">
    <div className="myHeader col-12 d-flex justify-content-end mt-5 pt-5 pe-4">
      <Link onClick={() => actions.setSelected(null)} to="/contact/new">
        <button type="button" className="btn btn-success ">
          New contact
        </button>
      </Link>
    </div>
    <div className="text-center container">
     {store.contacts?.contacts?.map(el =>
      <Contact key={el.id} contact={el} />
     )} 
     
    </div>
  </div>) 
};
