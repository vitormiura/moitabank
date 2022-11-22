import { Formik, Field, Form } from "formik";

export default function Register() {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-primary">
        create account!
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">bololo haha</h3>
          <Formik
            initialValues={{ name: "", cpf: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form
              action=""
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="name"
              />
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="cpf"
                type="text"
                placeholder="cpf"
              />
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="text"
                placeholder="password"
              />
              <button className="btn btn-active" type="submit">Signup!</button>
            </Form>
          </Formik>
        </label>
      </label>
    </>
  );
}
