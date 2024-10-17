import React from "react";
import Product from "./Product";

function Products() {
  var product = [
    {
      title: "aquitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis sed ipsam laborum vel alias recusandae?",
      live: true,
      case: true,
    },
    {
        title: "TTR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis sed ipsam laborum vel alias recusandae?",
        live: true,
        case: false,
      },
      {
        title: "YIR2024",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis sed ipsam laborum vel alias recusandae?",
        live: true,
        case: true,
      },
      {
        title: "Yahoo!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis sed ipsam laborum vel alias recusandae?",
        live: true,
        case: false,
      },
  ];
  return (
    <div>
     {product.map((val, index) => <Product val={val}/>)}
    </div>
  );
}

export default Products;
