import React from 'react';
import { useState } from 'react';

const svgHire = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>

)
const svgClipboard = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
    />
  </svg>
)

function Home() {
  const [buttonText, setButtonText] = useState("Copy Email");

  const copyToClipboard = () => {
    const email = "raflyyunandia@gmail.com"; 
    navigator.clipboard.writeText(email)
      .then(() => {
        setButtonText('Copied');
      })
      .catch((err) => {
        console.error('Copy error:', err);
      });
  };
  return (
    <>
      <section className="pt-24 pb-24 bg-gray-200">
        <div className="px-4 mx-auto max-w-xl bg-white rounded-xl shadow-lg md:px-12">
          <div className="w-full mx-auto text-center">
            <h1 className="pt-10 mb-8 text-5xl font-extrabold leading-none text-gray-900 md:text-6xl md:tracking-tight">
              <span>
                Welcome to
              </span>
              <span className="block py-2 w-full text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                My Website
              </span>
              <span>
                Stranger
              </span>
            </h1>

            <div className="flex items-center justify-between px-4 py-4 md:px-7 md:py-7">
              <div className="font-medium text-lg flex items-center gap-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <p>Front-end Developer</p>
              </div>
              <div className="bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-2 py-1 md:px-3 md:py-2 font-medium">
                <div className="text-sm font-medium flex items-center gap-x-1">
                  <div className="w-1.5 h-1.5 bg-[#109d5c] rounded-full"></div>
                  <span className="hidden md:block">available for work</span>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 md:px-7 md:py-7 flex flex-col md:flex md:flex-row md:items-center md:justify-between pt-3">
              <div className="flex flex-col gap-y-2 text-center md:text-left">
                <h1 className="text-4xl font-semibold tracking-tighter">I'm Rafly</h1>
                <p className="md:w-3/4 text-lg text-gray-500 font-normal tracking-tighter">
                  The programmer of this path, a web Developer on focus
                </p>
                <div className="flex items-center justify-center md:justify-start pt-6">
                  <a href="/"><button
                    type="button"
                    className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
                  >
                    {svgHire}
                    Hire Me
                  </button></a>
                  <button
                    onClick={copyToClipboard}
                    className="gap-x-1 bg-white focus:ring-2 focus:ring-gray-300 font-medium border rounded-lg border-gray-200 first-letter:rounded-lg text-sm px-1.5 py-1.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    {svgClipboard}
                    {buttonText}
                  </button>
                </div>
              </div>
              <div className="rounded-full p-4 flex items-center justify-center mb-7">
                <div className="w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
                  <img src="/" alt="" className="max-w-full max-h-full" />
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="flex items-center justify-between px-7 py-7 bg-gray-100 rounded-lg">
                <div className="font-medium text-lg flex items-center gap-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  Follow Me
                </div>
                <div className="flex gap-x-1">
                  <a href="/" className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm">
                    Test
                  </a>
                  <a href="/" className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm">
                    Test
                  </a>
                  <a href="/" className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm">
                    Test
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-8">
              <h1 className="text-3xl font-semibold">Let's work together.</h1>
              <p className="text-md font-normal text-gray-500 text-center px-3">
                Creating user experience and visually appealing design
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
