import type { NextPage } from "next";

import Image from "next/image";
import Cel from "../public/13mockup.png";
import Register from '../components/RegisterModal'
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
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
              <Register/>
            </div>
            <Image src={Cel} className="lg:max-w-2xl" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
