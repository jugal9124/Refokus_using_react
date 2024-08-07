import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              velit voluptate delectus sed nam fugit.
            </p>
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
              className="w-32 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
