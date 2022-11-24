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
          <form
            action=""
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cpf"
              type="text"
              placeholder="cpf"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="password"
            />
            <button className="btn btn-active">Signup!</button>
          </form>
        </label>
      </label>
    </>
  );
}