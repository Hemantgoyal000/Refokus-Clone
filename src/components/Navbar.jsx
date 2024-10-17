import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <h2>Refokus</h2>
        <div className="links flex gap-14 ml-24">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-5 bg-zinc-500"></span>
            ) : (
              <a className="text-sm flex items-center gap-1" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
