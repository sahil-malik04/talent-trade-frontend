import React, { useState } from "react";
import axios from "axios";
import { ThemeBtn } from "../components/ThemeButton";
import { useFormik } from "formik";
import { setNewPasswordSchema } from "./FieldsValidation";
import { GetError } from "../../utils/commonFunc";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

export const SetNewPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const getEmail = searchParams.get("email");
  const [isUpdated, setIsUpdated] = useState(false);

  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: setNewPasswordSchema,
    onSubmit: async (values) => {
      const { newPassword, confirmPassword } = values;
      if (confirmPassword !== newPassword) {
        toast.error("Password didn't match");
      } else {
        try {
          const URL = "/auth/set-new-password";
          const data = {
            email: getEmail,
            newPassword: newPassword,
          };
          const result = await axios.patch(URL, data);
          if (result?.status === 200) {
            setIsUpdated(true);
          }
        } catch (err) {
          toast.error(err?.response?.data?.message);
        }
      }
    },
  });

  return (
    <div className="h-screen flex justify-between bg-peacockblue-100">
      <div className="ml-auto mr-auto">
        <div className="mt-32">
          {!isUpdated ? (
            <form
              className="bg-white shadow-md rounded"
              style={{ width: "35rem" }}
              onSubmit={handleSubmit}
            >
              <h2 className="text-md text-center font-bold">
                {" "}
                Set New password
              </h2>
              <div className="px-8 pt-14 pb-12 mb-4">
                <div className="mb-8">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="newPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.newPassword}
                  />
                  <GetError value={errors.newPassword} />
                </div>
                <div className="mb-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.confirmPassword}
                  />
                  <GetError value={errors.confirmPassword} />
                </div>

                <div className="text-center mt-8">
                  <ThemeBtn label={"Save"} width={32} />
                </div>
              </div>
            </form>
          ) : (
            <div className="bg-slate-200 p-16 text-center">
              <h2 className="mb-2">
                {" "}
                <CheckIcon fontSize="large" color="success" />{" "}
              </h2>
              <h2> Your password has been updated successfully</h2>
              <div className="text-center mt-8">
                <ThemeBtn
                  label={"Back  to login"}
                  width={32}
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
