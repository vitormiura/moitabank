import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";

const Me: NextPage = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(Object);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/auth/user", {
          credentials: "include",
          method: "GET",
        });
        const data = await response.json();
        setAuth(true);
        setUser(data);

        if (user.detail == "Unauthenticated!") {
          setAuth(false);
          setTimeout(async () => {
            await router.push("/login");
          }, 500);
        }
      } catch (e) {
        setAuth(false);
        await router.push("/login");
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h1 className="text-black text-center pt-6 pb-0 font-bold text-4xl">
            Your info:
          </h1>
          <div className="text-black text-center pt-4">
            <p className="text-xl font-bold text-justif">Name: {user.name}</p>
            <p className="text-xl font-bold text-justif">E-mail: {user.email}</p>
            <p className="text-xl font-bold text-justif">Job: {user.job}</p>
            <p className="text-xl font-bold text-justif">Birthday: {user.birth_date}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Me;
