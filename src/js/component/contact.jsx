import React from "react";
import { Link } from "react-router-dom";
import contactImgOne from "../../img/iconContactOne.jpg"

export const Contact = () => {
	return (
		<div className="container row  d-flex justify-content-between align-center border border-secondary rounded m-5" >
  <div class="card-body d-flex ">
  <img className="rounded-circle" src={contactImgOne} className="col-2" alt="..." />
	<div className="col-4">
    <h3 className="mt-4">Mike Anamendolla</h3>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>

	</div>
  </div>
</div>
	);
};
