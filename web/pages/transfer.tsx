import { NextPage } from "next";
import Layout from "../layouts/Layout";
import { SyntheticEvent, useEffect, useState } from "react";

const Transfer: NextPage = () => {
  const [data, setData] = useState(Object);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(Object);
  const [value, setValue] = useState(0);
  const [recipient, setReci] = useState(Number);

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
    await fetch("http://localhost:8000/bank/trans/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: value,
        recipient: recipient,
        sender: user.id
      }),
    });
  };

  return (
    <>
      <Layout auth={auth}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <form onSubmit={submit}>
            <div className="font-manrope flex h-screen w-full items-center justify-center">
              <div className="mx-auto box-border w-[365px] border bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">
                    Transfer to another account!
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
                    How much would you like to send?
                  </div>
                  <div>
                    <input
                      className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="number"
                      placeholder="Type your quantity"
                      onChange={(e) => setValue(parseInt(e.target.value))}
                    />
                    <p className="text-black">
                      your balance: R$ {data.balance}
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

                      <div className="flex items-center gap-x-2">
                        <div className="text-[#64748B]">{data.number}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#191D23]">
                      Receiving
                    </span>
                    <div className="flex cursor-pointer items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="font-semibold text-green-700">
                        Add recipient
                      </div>
                    </div>
                  </div>
                  <input
                    className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                    type="text"
                    placeholder="Account number with extra digit!"
                    onChange={(e) => setReci(parseInt(e.target.value))}
                  />
                </div>

                <div className="mt-6">
                  <button type="submit" className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                    Send Now!
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

export default Transfer;
