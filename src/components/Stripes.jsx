import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    { name: "Awwwards", number: "48" },
    { name: "CSS Design Awwards", number: "2" },
    { name: "No Code Conf2024", number: "11" },
    { name: "Awwwards", number: "22" },
    { name: "CSS Design Awwards", number: "48" },
    { name: "No Code Conf2024", number: "2" },
    { name: "Awwwards", number: "22" },
  ];

  return (
    <div className="flex items-center mt-2">
      {data.map((elem, index) => (
        <Stripe val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
