import Logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8 bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="" className="flex items-center mb-4 sm:mb-0">
          <img src={Logo} className="mr-3 h-8" alt="Moitabank Logo"></img>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Moitabank
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"></hr>
      <span className="block text-sm text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="" className="hover:underline">
          Moitabank™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
