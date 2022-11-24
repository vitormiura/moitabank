import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";

export default function Client() {
  const [msg, setMsg] = useState("not logged in!");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/auth/user", {
          credentials: "include",
        });
        const content = await response.json();
        setMsg(`hi ${content.name}, you are logged in!`);
        setAuth(true)
      } catch (e) {
        setMsg("pls log in!");
        setAuth(false)
      }
    })();
  });
  return (
    <>
      <Layout auth = {auth}>
        <div>{msg}</div>
      </Layout>
    </>
  );
}
