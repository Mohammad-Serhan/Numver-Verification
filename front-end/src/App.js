import React, { useState, useEffect } from "react";
import Customer from "./Components/customer";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(res => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  });


  if (isLoading) {
    return (
      <div className="App">
      <div className="text-gray-600 body-font">
        <div className="container px-5 mt-12 mx-auto flex flex-wrap">
          <div className="text-indigo-800 text-2xl  ">Loading ...</div>
          </div>
          </div>
        </div>
    )
  }

  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-12 mx-auto flex flex-wrap">
          <div className="text-indigo-800 text-2xl  ">Customers</div>
          <div className="flex flex-wrap w-full mt-2">
            <div className="md:w-2/5 md:pr-8 md:py-6">
              {customers.map((customer, key) =>
                customers.length - 1 !== key ? (
                  <div className="flex relative pb-12" key={key}>
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      {key + 1}
                    </div>
                    <div
                      onClick={() => {
                        setCustomerID(customer["_id"]);
                      }}
                      className="flex-grow pl-4 ml-2 hover:bg-gray-300 hover:rounded-full hover:cursor-pointer "
                    >
                      <h2 className="font-medium title-font text-sm text-gray-900  tracking-wider">
                        {customer.name}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="flex relative" key={key}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      {key + 1}
                    </div>
                    <div
                      onClick={() => {
                        setCustomerID(customer["_id"]);
                      }}
                      className="flex-grow pl-4 ml-2 hover:bg-gray-300 hover:rounded-full hover:cursor-pointer "
                    >
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        {customer.name}
                      </h2>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="md:w-3/5 rounded-lg">
               <Customer cusId={customerID } />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
