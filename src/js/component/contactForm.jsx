import React from "react";
import contactImgOne from "../../img/iconContactOne.jpg";

export const ContactForm = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
    <form className="col-12 col-sm-8 rounded bg-white">
      <div class="mb-3">
        <label class="form-label" id="name">
          Full Name
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Full Name"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" id="email">
          Email
        </label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" id="phone">
          Phone
        </label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" id="adress">
          Adress
        </label>
        <input
          type="text"
          class="form-control"
          id="adress"
          placeholder="Enter adress"
        />
      </div>

      <button type="submit" class="btn btn-primary col-12">
        Save
      </button>
    </form>
  </div>
  );
};
