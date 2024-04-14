import { Link, useNavigate } from "react-router-dom";
import { ThemeBtn } from "../components/ThemeButton";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetError, encryptData } from "../../utils/commonFunc";
import { loginFormSchema } from "./FieldsValidation";
import { useDispatch } from "react-redux";
import { assignUser } from "../../store/reducers/userSlice";
import { insDashboard, lnrDashboard } from "../../utils/dataUtility";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,

    onSubmit: async (values) => {
      try {
        const URL = "/auth/sign-in";
        const encryptedPassword = encryptData(values?.password);
        const data = {
          email: values?.email,
          password: encryptedPassword,
        };
        const result = await axios.post(URL, data);
        if (result?.status === 200) {
          toast.success(result?.data?.message);
          const userData = result.data?.data;
          dispatch(assignUser(userData));
          if (userData?.role === 1) {
            navigate(insDashboard);
          } else {
            navigate(lnrDashboard);
          }
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  return (
    <>
      <div className="h-screen flex justify-between bg-peacockblue-100">
        <div className="mt-32 ml-auto mr-auto">
          <img src="/assets/images/login_banner.png" alt="login-bannerc" />
        </div>
        <div className="w-full max-w-sm mr-28 mt-32">
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
                <GetError value={errors.email} />
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
                <GetError value={errors.password} />
              </div>
              <div className="text-right">
                <Link
                  className="inline-block align-baseline font-bold text-sm text-peacockblue-100"
                  to="/forgot-password"
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
