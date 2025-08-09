import { Button } from "@/components/ui/button";
import React from "react";

export default function DashboardLayout() {
  return (
    <main
      className="flex flex-col items-center w-screen bg[#F0EFE4]"
      
      // style={{
      //   backgroundImage:
      //     // "linear-gradient(to bottom, #F0EFE4 20%, #7690B6 70%)",
      // }}
    >
      {/* Landing Section */}
     {/* Blobs background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>
      <div className="blob blob6"></div>
      
      <section
        id="landing"
        className="w-[90vw] flex flex-col items-center text-white"
      >
        <div className="flex flex-col w-full">
          <header
            id="nav"
            className="h-18 w-full flex justify-between items-center p-4 my-6 rounded-md bg-[#FCFCF9]"
          >
            <div className="flex items-center gap-2">
              <img
                src="logo_black.png"
                alt="Restruct Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold text-black">
                Restruct
              </span>
            </div>
            <nav className="flex gap-8 text-black">
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
              <a href="#demo" className="hover:text-white">
                Demo
              </a>
              <a href="/signin" className="hover:text-white">
                Sign in
              </a>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </nav>
          </header>

          
          <div
            id="hero-content"
            className="w-full flex flex-col text-left pt-24 px-24 rounded-md bg-[#FCFCF9] overflow-hidden"
          >
            <h1 className="text-5xl text-[#222222] font-light">
              cleaner repositories.
            </h1>
            <div className="flex items-center text-changer text-[#222222] font-light">
              <p className="intro-text text-5xl text-[#222222]">better</p>
              <div className="roles-container ml-3 h-[54px]">
                <div className="roles-inner">
                  <span className="role text-5xl">projects.</span>
                  <span className="role text-5xl">recruitment.</span>
                  <span className="role text-5xl">code.</span>
                  <span className="role text-5xl">sponsors.</span>
                  <span className="role text-5xl">projects.</span>
                </div>
              </div>
            </div>
            <p className="text-5xl text-[#909090] pb-12 font-light">
              ensure codebases are better with Restruct.
            </p>

            <form className="flex w-full max-w-lg h-12 rounded-md overflow-hidden border mb-12">
              <input
                type="email"
                placeholder="enter email"
                className="flex-1 px-4 bg-white text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 bg-[#222222] text-white hover:bg-gray-200 transition"
              >
                get early access
              </button>
            </form>

            <img
              src="database-example.png"
              alt="Restruct Dashboard Preview"
              className="rounded-t-md pb-12"
            />
          </div>

          <div
            id="social-proof"
            className="items-center text-center w-full flex py-12 px-24 justify-around rounded-md bg-[#FCFCF9] overflow-hidden my-6"
          >
            <h1 className="text-black">Trusted by these hackathons.</h1>
            <img
              src="hophacks.png"
              alt="HopHacks"
              className="rounded-md max-h-20"
            />
          </div>

          <div
            id="demo"
            className="w-full aspect-video rounded-md overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bbea3tTHj8E?"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            id="how-it-works"
            className="w-full aspect-video rounded-md overflow-hidden my-6 grid grid-cols-2 gap-6"
          >
            <div className="bg-blue-400 rounded-md row-span-2"></div>
            <div className="bg-green-400 rounded-md"></div>
            <div className="bg-yellow-400 rounded-md"></div>
          </div>
          <div
          id = "CTA"
          className="w-full aspect-video rounded-md overflow-hidden bg-red-400 mb-6"
          >

          </div>
          <div
          id = "footer"
          className="w-full aspect-video rounded-md overflow-hidden bg-blue-400"
          >

          </div>
        </div>
      </section>
    </main>
  );
}