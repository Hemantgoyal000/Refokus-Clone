import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-lg mx-auto py-10 flex gap-20">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-10">
          <div className="basis-1/3">
            <h4 className="mb-6 capitalize text-zinc-400">Socials</h4>
            {["instagram", "twiter", "linkedin"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-6 capitalize text-zinc-400">Sitemap</h4>
            {["home", "work", "carrers", "contact"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-300">{item}</a>
            ))}
          </div>
          <div className="basis-1/2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat?</p>
          <button className="px-4 py-2 bg-blue-500 mt-5 rounded-md">Get Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
