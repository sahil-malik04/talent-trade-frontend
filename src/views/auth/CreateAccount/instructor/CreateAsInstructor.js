import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ThemeBtn } from "../../../components/ThemeButton";
import { InstructorForm1 } from "./InstructorForm1";
import { InstructorForm2 } from "./InstructorForm2";
import { useFormik } from "formik";
import { encryptData, getSelectedValue } from "../../../../utils/commonFunc";
import axios from "axios";
import { toast } from "react-toastify";
import { instructorSignupSchema } from "../CreateAccountValidations";

export const CreateAsInstructor = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const initialValues = {
    firstName: "",
    lastName: "",
    insEmail: "",
    insPassword: "",
    gender: { value: "1", label: "Male" },
    YOE: "",
    industry: [],
    AOE: [],
    from: "",
    to: "",
    HC: "",
  };

  const {
    values,
    handleChange: handleFieldChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: instructorSignupSchema(currentStep),
    onSubmit: async (values) => {
      if (currentStep === 1) {
        setCurrentStep(() => currentStep + 1);
      }

      if (currentStep === 2) {
        try {
          const URL = "/auth/instructor-sign-up";
          const selectedIndustry = getSelectedValue(values?.industry);
          const AOE = getSelectedValue(values?.AOE);
          const encryptedPassword = encryptData(values?.insPassword);

          const data = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.insEmail,
            password: encryptedPassword,
            gender: values?.gender?.value,
            YOE: values?.YOE,
            industry: selectedIndustry,
            AOE: AOE,
          };
          const result = await axios.post(URL, data);
          if (result?.status === 200) {
            toast.success(result?.data?.message);
          }
        } catch (err) {
          toast.error(err?.response?.data?.message);
        }
      }
    },
  });
  return (
    <>
      <div className="h-screen flex justify-evenly mt-12">
        <div className="mr-14">
          <img
            src="/assets/images/teacher_banner.png"
            style={{ height: "28rem" }}
            alt="teacher-banner"
          />
        </div>
        <div>
          <form
            className="bg-white shadow-md rounded w-full ml-auto mt-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-md text-center font-bold">
              The art of teaching is the art of assisting discovery
            </h2>
            {currentStep === 2 && (
              <span
                className="cursor-pointer ml-1"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowBackIcon style={{ color: "#016795" }} />
              </span>
            )}

            <div className="px-8 pt-14 pb-12 mb-4">
              {currentStep === 1 ? (
                <InstructorForm1
                  handleChange={handleFieldChange}
                  values={values}
                  errors={errors}
                />
              ) : (
                <InstructorForm2
                  handleChange={handleFieldChange}
                  values={values}
                  errors={errors}
                />
              )}

              {currentStep === 1 && (
                <div className="text-right">
                  <span className="text-sm">Already have an account?</span>
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-1 cursor-pointer"
                    to={"/login"}
                  >
                    Sign in
                  </Link>
                </div>
              )}

              <div
                className="text-center mt-5"
                style={{ marginTop: currentStep === 2 && "50px" }}
              >
                <ThemeBtn
                  label={currentStep === 2 ? "Create Account" : "Next"}
                  width={currentStep === 2 ? 40 : 32}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
