import { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
import { setTimeout } from "timers";

export default function Client() {
  const router = useRouter();

  const [data, setData] = useState(Object);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/auth/user", {
          credentials: "include",
          method: "GET",
        });
        const user = await response.json();
        setUser(user.name);
        setAuth(true);
        setTimeout(() => {
          console.log(user.id);
          macaco(user.id);
        }, 1000);
    
        if (user.detail == "Unauthenticated!") {
          setAuth(false);
          setTimeout(async () => {
            await router.push("/login");
          }, 1000);
        }
      } catch (e) {
        setAuth(false);
        console.log(e);
      }
    })();
  }, []);

  

  function macaco(idParam:number) {
      try {
        fetch(`http://localhost:8000/bank/accounts/${idParam}`, {
          credentials: "include",
          method: "GET",
        })
        .then(e => e.json())
        .then(e => setData(e))
      } catch (e) {
        console.log(e);
      }

  };

  return (
    <>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h3 className="text-lg font-bold">Welcome {user}!</h3>
          
          <p>{data.balance}</p>
          <p>{data.agency}</p>
          <p>{data.number}</p>
          
        </div>
      </Layout>
    </>
  );
}
