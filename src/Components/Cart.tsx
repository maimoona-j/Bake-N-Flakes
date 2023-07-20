import React, { useState } from "react";
import card from "../Assets/card.svg";
import paypal from "../Assets/paypal.svg";
import stripe from "../Assets/Stripe.svg";

export default function Cart() {
  return (
    <div className="h-[] border border-red-300">
      <h1 className="text-2xl mt-4">Product details</h1>
      <div className="mt-6">
        <img src="" alt="" />
        <div className="font-bold">
          <p>Name:</p>
          <p>$20 *3</p>
          <p>Total: $60</p>
        </div>
        <h2 className="text-lg mt-3">Enter payment details</h2>
        <div className="ml-56">
          <div className="flex">
            <div className="w-[450px] h-[92px]  ml-[30px] mt-[30px]   ">
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2  border border-gray-300 rounded  "
                placeholder="First Name"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]   ml-[30px] mt-[30px]  ">
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Last Name"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-[450px] h-[92px]  ml-[30px] mt-[10px]   ">
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2  border border-gray-300 rounded  "
                placeholder="Email"
                style={{ paddingLeft: "10px" }}
              />
              <input
                type="text"
                className="w-[450px] h-[50px] mt-[40px]  border border-gray-300 rounded  "
                placeholder="Address"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className="w-[450px] h-[92px]   ml-[30px] mt-[10px]  ">
              <input
                type="text"
                className="w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                placeholder="Card no"
                style={{ paddingLeft: "10px" }}
              />
              <input
                type="number"
                placeholder="CVV"
                className="h-[50px] mt-[40px]
           mr-12 border pl-2 border-gray-300 rounded"
              />
            </div>
          </div>
          <button className="w-[450px] h-[50px]  mb-12  mr-[300px] mt-[80px] bg-sky-200 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
