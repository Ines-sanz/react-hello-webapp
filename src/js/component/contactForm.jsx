import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const ContactForm = () => {
  const { store, actions } = useContext(Context);

  const [formData, setData] = useState({
    fname: store.selected?.name || "",
    email: store.selected?.email || "",
    address: store.selected?.address || "",
    phone: store.selected?.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <form className="col-12 col-sm-8 rounded bg-white">
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input
            required
            value={formData.name}
            onChange={handleChange}
            type="text"
            class="form-control"
            name="fname"
            placeholder="Full Name"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            required
            value={formData.email}
            onChange={handleChange}
            type="email"
            class="form-control"
            name="email"
            placeholder="Enter email"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input
            required
            value={formData.phone}
            onChange={handleChange}
            type="text"
            class="form-control"
            name="phone"
            placeholder="Enter phone"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Adress</label>
          <input
            required
            value={formData.address}
            onChange={handleChange}
            type="text"
            class="form-control"
            name="address"
            placeholder="Enter address"
          />
        </div>
        {store.selected ? (
         <input type='submit' className="btn btn-primary col-12" value={'Edit contact'}/>
        ) : (
          <input type='submit' className="btn btn-primary col-12" value={'Save new contact'}/>
        )}
      </form>
    </div>
  );
};
