import { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();

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
        if (user.detail == "Unauthenticated!") {
          setAuth(false);
          setTimeout(async() => {
            await router.push("/login");
          }, 5000)
          return (<div><input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </label>
          </label>
          </div>)
  
        }
      } catch (e) {
        setAuth(false);
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h3 className="text-lg font-bold">Welcome {user}!</h3>
        </div>
      </Layout>
    </>
  );
}
