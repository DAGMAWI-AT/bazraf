import React, { useState } from "react";
import { footer, Map } from "../../../data/Data";

function TestFooter() {
    const [email, setEmail] = useState({
        text: footer[2].text[1].list, // Access the first value from the "text" array
        to: footer[2].to,
        isEditing: false,
      });
  const [formData, setFormData] = useState({
    logo: "",
    location: "firnd ship",
    officeNo: "",
    floorNo: "",
    receptionPhone: "",
    email: email.text,
    phone1: "",
    phone2: "",
    facebook: "",
    instagram: "",
    xmedia: "",
    youtube: "",
    linkdin: "",
    map: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform actions like API calls or data updates here
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto mt-4">
        <h5 className="text-center">Edit Settings</h5>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-8">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mt-4">
              <label>
                Logo <span>*</span>
              </label>
              <div>
                <input
                  id="logo"
                  type="file"
                  name="logo"
                  value={formData.logo}
                  onChange={handleInputChange}
                  className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div id="holder1"></div>
            </div>

            <div className="mt-4">
              <label htmlFor="location" className="col-form-label">
                Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="location" className="col-form-label">
                Office Number
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="officeNo"
                value={formData.officeNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="floorNo" className="col-form-label">
                Floor No
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="floorNo"
                value={formData.floorNo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mt-4">
              <label htmlFor="receptionPhone" className="col-form-label">
                Reception Phone <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="receptionPhone"
                required
                value={formData.receptionPhone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="col-form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
              type="email"
              className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              required
              value={formData.email}  // Use formData.email directly
              onChange={handleInputChange}
            />
            
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="phone1" className="col-form-label">
                Phone Number 1 <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone1"
                required
                value={formData.phone1}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone2" className="col-form-label">
                Phone Number 2<span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone2"
                required
                value={formData.phone2}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="facebook" className="col-form-label">
                Facebook
              </label>
              <input
                type="link"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="instagram" className="col-form-label">
                Instagram
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="twitter" className="col-form-label">
                X-Media
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="xmedia"
                value={formData.xmedia}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="youtube" className="col-form-label">
                Youtube
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="youtube"
                value={formData.youtube}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="linkdin" className="col-form-label">
                Linkdin
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="linkdin"
                value={formData.linkdin}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="map" className="col-form-label">
                Map
              </label>
              <input
                type="text"
                className="border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="map"
                value={formData.map}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestFooter;
