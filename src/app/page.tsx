import { Brazil, Germany } from "@/assets/images";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-28   xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="flex flex-wrap justify-between items-baseline mb-11">
        <input
          type="search"
          placeholder="Searching..."
          className="w-80  md:w-96 p-4 rounded-lg border-slate-500 border-2 outline-none"
        />
        <select
          name="all"
          id="all"
          className="mt-5 p-3 rounded-lg border-slate-500 border-2 outline-none"
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-16 justify-center">
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Germany}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Brazil}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Germany}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Brazil}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Germany}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Brazil}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Germany}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className="germany bg-slate-200 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Brazil}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-5">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
