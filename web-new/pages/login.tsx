import Head from "next/head";
import { NextPage } from "next";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import Logo from "../public/logo.png";
import Register from "../components/RegisterModal";
import muie from "../public/womanCell.jpg";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { actionTypes, useStateValue } from "../reducer";

type Props = {
  cpf: string;
  password: string;
};

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const login = async ({ cpf, password }: any) => {
  try {
    const { data } = await api.post("/auth/login", { cpf, password });
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

const Login: NextPage = () => {
  const[{}, dispatch] = useStateValue()

  const { isLoading, error, isError, mutateAsync, data } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
    },
  });

  console.log("data", data);

  if (isError) {
    console.log("err login");
  }

  return (
    <>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 max-w-7x1 mx-auto">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <Image className="mx-auto w-48" src={Logo} alt="logo" />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Login
                        </h4>
                      </div>
                      <p className="mb-4">Please login to your account</p>
                      <Formik
                        initialValues={{ cpf: "", password: "" }}
                        onSubmit={async (values: Props) => {
                          await mutateAsync({
                            cpf: values.cpf,
                            password: values.password,
                          });
                        }}
                      >
                        <Form>
                          <div className="mb-4">
                            <Field
                              type="text"
                              name="cpf"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="CPF"
                            />
                          </div>
                          <div className="mb-4">
                            <Field
                              name="password"
                              type="password"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Password"
                            />
                          </div>
                          <div className="text-center pt-1 mb-12 pb-1">
                            <button
                              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-green-600"
                              type="submit"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Log in
                            </button>
                            <a className="text-gray-500" href="#!">
                              Forgot password?
                            </a>
                          </div>
                        </Form>
                      </Formik>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Not a customer yet?</p>
                        <Register />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <Image src={muie} alt="woman using phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
