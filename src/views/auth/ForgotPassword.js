import React from "react";
import { ThemeBtn } from "../components/ThemeButton";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "./FieldsValidation";
import { GetError } from "../../utils/commonFunc";
import axios from "axios";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      try {
        const URL = `/auth/forgot-password?email=${values.email}`;
        const result = await axios.post(URL);

        if (result?.status === 200) {
          resetForm();
          toast.success(result?.data?.message);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });
  return (
    <>
      <div className="flex justify-around mt-20 items-center ">
        <div>
          <img
            src="/assets/images/forgot_password_banner.jpg"
            alt="forgot-password-banner"
          />
        </div>

        <form
          className="mb-3 shadow-lg border-x-2 border-y-2 h-80 pt-14 w-80"
          onSubmit={handleSubmit}
        >
          <div className="p-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Enter email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email@address.com"
              onChange={handleChange}
              value={values.email}
            />
            <GetError value={errors.email} />
          </div>
          <div className="text-center mt-28">
            <ThemeBtn label={"Submit"} />
          </div>
        </form>
      </div>
    </>
  );
};
