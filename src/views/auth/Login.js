import { useNavigate } from "react-router-dom";
import { ThemeBtn } from "../components/ThemeButton";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-between bg-peacockblue-100">
        <div className="mt-32"></div>
        <div className="w-full max-w-sm mr-16 mt-32">
          <form className="bg-white shadow-md rounded ">
            <h2 className="text-md text-center font-bold"> Login here</h2>
            <div className="px-8 pt-14 pb-12 mb-4">
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
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center mt-2">
                <ThemeBtn label={"Sign In"} />
              </div>
              <div className="text-center mt-2">
                Not a member?
                <span
                  className="ml-1 text-peacockblue-100 cursor-pointer"
                  onClick={() => navigate("/create-account")}
                >
                  Create Account
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
