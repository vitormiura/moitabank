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

  return (
    <>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h3 className="text-lg font-bold">Welcome {user}!</h3>
        </div>
      </Layout>
    </>
  );
}
