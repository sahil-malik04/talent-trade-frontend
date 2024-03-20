import { Link } from "react-router-dom";
import { ThemeBtn } from "../../../components/ThemeButton";

export const CreateAsStudentS1 = ({ handleSubmit, handleChange, values }) => {
  return (
    <form
      className=" rounded w-5/12 ml-auto mr-auto mt-6"
      onSubmit={handleSubmit}
    >
      <div className="bg-white shadow-md">
        <h2 className="text-md text-center font-bold">
          {" "}
          Fill your details below
        </h2>
        <div className="px-8 pt-14 pb-12 mb-4">
          <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
            <div className="row-start-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firtName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firtName"
                type="text"
                value={values?.firtName}
                onChange={handleChange}
              />
            </div>
            <div className="row-start-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                value={values?.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={values?.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={values?.password}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="text-right">
            <span className="text-sm">Already have an account?</span>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-1 cursor-pointer"
              to={"/login"}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <ThemeBtn label={"Next"} width={32} />
      </div>
    </form>
  );
};
