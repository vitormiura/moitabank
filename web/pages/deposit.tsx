import { NextPage } from "next";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../layouts/Layout";

const Deposit: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState(Object);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(Object);
  const [value, setValue] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/auth/user", {
          credentials: "include",
          method: "GET",
        });
        const user = await response.json();
        setAuth(true);
        setUser(user);
        setTimeout(() => {
          acc(user.id);
        }, 250);

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

  function acc(idParam: number) {
    try {
      fetch(`http://localhost:8000/bank/accounts/${idParam}`, {
        credentials: "include",
        method: "GET",
      })
        .then((e) => e.json())
        .then((e) => setData(e));
    } catch (e) {
      console.log(e);
    }
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/bank/deposit/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: value,
        account: user.id,
      }),
    });
  };

  return (
    <>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <h1 className="text-black text-center pt-6 pb-0 font-bold text-4xl">
            Hey {user.name}, deposit to your account ASAP!
          </h1>
          <form onSubmit={submit}>
            <div className="font-manrope flex h-[40rem] w-full items-center justify-center">
              <div className="mx-auto box-border w-[365px] border bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">
                    Deposit to your account!
                  </span>
                  <div className="cursor-pointer border rounded-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#64748B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">
                    How much would you like to deposit?
                  </div>
                  <div>
                    <input
                      className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="number"
                      placeholder="Type your quantity"
                      onChange={(e) => setValue(parseInt(e.target.value))}
                    />
                    <p className="text-black">
                      Your balance now: R$ {data.balance}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">From</div>
                  <div className="mt-2">
                    <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                      <div className="flex items-center gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#299D37]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-semibold">{user.name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">Account</div>
                  <div className="mt-2">
                    <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                      <div className="flex items-center gap-x-2">
                        <span className="font-semibold">
                          Number: {data.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <div className="text-[#64748B]">
                          Agency: {data.agency}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white"
                  >
                    Deposit Now!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Deposit;
