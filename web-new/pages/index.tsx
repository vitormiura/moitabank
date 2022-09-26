import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cel from "../public/cel.png";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-gray-800">
              <h1 className="text-5xl font-bold">
                Fast, Secure and Realiable!
              </h1>
              <p className="py-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                explicabo repudiandae atque quaerat magni suscipit vitae
                cupiditate ab deserunt! Odit, accusamus ipsum adipisci mollitia
                quam optio modi ut illo. Cumque.
              </p>
              <button className="btn btn-primary">Lorem ipsum</button>
            </div>

            <Image src={Cel} className="lg:max-w-2xl" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home