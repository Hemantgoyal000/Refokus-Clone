import React from "react";
import Button from "./Button";

function Product({val}) {
  return (
    <div className="w-full py-20 text-white bg-zinc-900 ">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between ">
        <h1 className="text-5xl font-medium capitalize">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-6">
           {val.description}
          </p>
          <div className="flex items-center gap-5">
            {val.live && <Button/>}
            {val.case && <Button title="Case Study"/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
