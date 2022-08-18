import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-stone-100 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="" className="flex items-center mb-4 sm:mb-0">
          <img src="../public/logo.png" className="mr-3 h-8" alt="Moitabank Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Moitabank</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">Moitabank™</a>. All Rights Reserved.
        </span>
    </footer>
  )
}