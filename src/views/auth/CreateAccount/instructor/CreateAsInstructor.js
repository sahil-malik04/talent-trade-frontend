import { Link, useNavigate } from "react-router-dom";

import { ThemeBtn } from "../../../components/ThemeButton";

export const CreateAsInstructor = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-evenly mt-12">
        <div className="mr-14">
        <img
          src="/assets/images/teacher_banner.png"
          style={{ height: "28rem" }}
        />
        </div>
        <div>
          <form className="bg-white shadow-md rounded w-full ml-auto mt-6">
            <h2 className="text-md text-center font-bold">
              The art of teaching is the art of assisting discovery
            </h2>
            <div className="px-8 pt-14 pb-12 mb-4">
              <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
                <div className="row-start-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="first_name"
                    type="text"
                  />
                </div>
                <div className="row-start-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="last_name"
                    type="text"
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
              <div className="text-center mt-5">
              <ThemeBtn label={"Create Account"} />
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
