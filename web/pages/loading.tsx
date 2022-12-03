import { NextPage } from "next";

const Final: NextPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please do not close this page.
        </p>
      </div>
    </>
  );
};

export default Final;
