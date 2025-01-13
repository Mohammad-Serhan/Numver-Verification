import React, { useEffect, useState } from "react";

import API from "../utility/api";

const Customer = (props) => {
  const initialValues = { name: "", address: "", phone: "" };
  const [customerDetails, setCustomerDetails] = useState(initialValues);
  const [phoneError, setPhoneError] = useState(null);
  const [missingFields, setmissingFields] = useState(null);

  const handle = (e) => {
    const newCustomer = { ...customerDetails };
    newCustomer[e.target.id] = e.target.value;
    setCustomerDetails(newCustomer);
  };

  const clearForm = () => {
    setCustomerDetails({
      name: "",
      address: "",
      phone: "",
    });
  };

  const createCustomer = async () => {
    if (checkFormInput()) {
      const response = await API.post(`${props.cusId}`, customerDetails);

      if (response.data["valid"] === false || !response.data["valid"]) {
        setPhoneError("not valide");
      } else {
        setPhoneError(null);
        console.log({
          "Country name :": response.data.country_name,
          "Country code :": response.data.country_code,
          "Carrier name :": response.data.carrier,
        });
      }
      setmissingFields(null);
    }
  };

  const deleteCustomer = async () => {
    if (checkFormInput()) {
      const response = await API.delete(`${props.cusId}`);
      console.log(response.data);
      clearForm();
      setmissingFields(null);
    }
  };

  const updateCustomer = async () => {
    if (checkFormInput()) {
      const response = await API.patch(`${props.cusId}`, customerDetails);

      if (response.data["valid"] === false || !response.data["valid"]) {
        setPhoneError("not valide");
      } else {
        setPhoneError(null);
        console.log({
          "Country name :": response.data.country_name,
          "Country code :": response.data.country_code,
          "Carrier name :": response.data.carrier,
        });
      }

      setmissingFields(null);
    }
  };

  const checkFormInput = () => {
    if (
      customerDetails.name === initialValues.name ||
      customerDetails.address === initialValues.address ||
      customerDetails.phone === initialValues.phone
    ) {
      setmissingFields("there is missing fields");
    } else return true;
  };

  useEffect(() => {
    setPhoneError(null);
    setmissingFields(null);

    const fetchPost = async () => {
      try {
        let res = await API.get(`${props.cusId}`);
        setCustomerDetails({
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (props.cusId) {
      fetchPost();
    }
  }, [props.cusId]);

  return (
    <section className="  relative">
      <div className="container text-gray-600">
        <div className="flex flex-wrap m-2">
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                value={customerDetails.name}
                onChange={(e) => handle(e)}
                id="name"
                name="name"
                className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <input
                type="address"
                value={customerDetails.address}
                onChange={(e) => handle(e)}
                id="address"
                name="address"
                className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="number"
                className="leading-7 text-sm text-gray-600"
              >
                {phoneError === null ? (
                  <></>
                ) : (
                  <span className="text-red-500 text-sm "> {phoneError} </span>
                )}
                Mobile Number
              </label>
              <input
                value={customerDetails.phone}
                onChange={(e) => handle(e)}
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
          </div>
          {missingFields === null ? (
            <></>
          ) : (
            <span className="text-red-500 text-sm "> {missingFields} </span>
          )}
          <div className="mt-12 w-full flex justify-between">
            <button
              onClick={createCustomer}
              className=" mr-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
            >
              Add
            </button>
            <button
              onClick={updateCustomer}
              className=" mr-4  text-white bg-green-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
            >
              Update
            </button>
            <button
              onClick={deleteCustomer}
              className=" mr-4  text-white bg-red-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
