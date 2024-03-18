import { Link, useNavigate } from "react-router-dom";
import { ThemeBtn } from "../components/ThemeButton";
import { useFormik } from "formik";
import { LoginFormValidation } from "./LoginFormValidation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { encryptPassword } from "../../utils/commonFunc";


export const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormValidation,

    onSubmit: async (values) => {
      try {
        const URL = "/auth/student/sign-in";
        const encryptedPassword = encryptPassword(values?.password);
        const body = {
          email: values?.email,
          password: encryptedPassword,
        };
        const result = await axios.post(URL, body);
        if (result?.status === 200) {
          toast.success(result?.data?.message);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  return (
    <>
      <div className="h-screen flex justify-between bg-peacockblue-100">
        <div className="mt-32"></div>
        <div className="w-full max-w-sm mr-16 mt-32">
          <form className="bg-white shadow-md rounded" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  value={values.email}
                />
                <p className="text-red-500 text-sm mb-2">{errors.email}</p>
              </div>
              <div className="mb-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <p className="text-red-500 text-sm mb-2">{errors.password}</p>
              </div>
              <div className="text-right">
                <Link
                  className="inline-block align-baseline font-bold text-sm text-peacockblue-100"
                  to=""
                >
                  Forgot Password?
                </Link>
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
