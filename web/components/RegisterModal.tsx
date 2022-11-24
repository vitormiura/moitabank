import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        cpf,
        email,
        password,
      }),
    });
    await router.push("/login");
  };

  return (
    <>
        <label htmlFor="my-modal-4" className="btn btn-primary">
          create account!
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">bololo haha</h3>
            <form
              onSubmit={submit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cpf"
                type="text"
                placeholder="cpf"
                onChange={(e) => setCpf(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-active" type="submit">
                Signup!
              </button>
            </form>
          </label>
        </label>
    </>
  );
}
