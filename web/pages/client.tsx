import { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";

export default function Client() {
  const [auth, setAuth] = useState(false);
  const [date, setDate] = useState('')
  const [active, setActive] = useState(true)
  const [cnpj, setCnpj] = useState('Null')
  const [job, setJob] = useState('')
  const [gender, setGender] = useState('U') 
  // const [sess, setSess] = useState('')

  let usr = ''

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/auth/user", {
          credentials: "include",
          method: "GET",
        });
        const content = await response.json();
        usr = content.id
        setAuth(true);
      } catch (e) {
        setAuth(false);
      }
    })();
  });
  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/bank/client/", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        is_active: active,
        birth_date: date,
        cnpj: cnpj,
        job: job,
        gender: gender,
        user: usr
      }),
    });
    // await router.push("/login");
  };

  return (
    <>
      <Layout auth = {auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h3 className="text-lg font-bold">pls complete your regitration!</h3>
          <form
            onSubmit={submit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="birth date"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cpf"
              type="text"
              placeholder="cnpj"
              onChange={(e) => setCnpj(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="job"
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <button className="btn btn-active" type="submit">
              Signup!
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
