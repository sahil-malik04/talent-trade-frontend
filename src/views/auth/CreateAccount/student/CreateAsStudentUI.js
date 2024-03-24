import React, { useState } from "react";
import CheckoutStepper from "./CheckoutStepper";
import { CreateAsStudentS1 } from "./CreateAsStudentS1";
import { CreateAsStudentS2 } from "./CreateAsStudentS2";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { studentSignupSchema } from "../CreateAccountValidations";

const CreateAsStudentUI = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    stuEmail: "",
    stuPassword: "",
    industry: [],
    branch: [],
    preferredLearning: "1",
    from: "",
    to: "",
  };

  const {
    handleSubmit,
    handleChange: handleFieldChange,
    values,
    errors,
  } = useFormik({
    initialValues,
    validationSchema: studentSignupSchema(currentStep),
    onSubmit: async (values) => {
      setCurrentStep(2);
      if (isCompleted) {
        try {
          const URL = "/auth/student-sign-up";

          const selectedIndustry = values?.industry.map(
            (option) => option.value
          );
          const selectedBranch = values?.branch.map((option) => option.value);

          const data = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.email,
            password: values?.password,
            industry: selectedIndustry,
            branch: selectedBranch,
            preferredLearning: values?.preferredLearning,
            preferredTimeFrom: values?.from.value,
            preferredTimeTo: values?.to?.value,
            role: 2,
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
      <div className="student-banner h-screen pt-2">
        <CheckoutStepper step={currentStep} isCompleted={isCompleted} />
        {currentStep === 1 ? (
          <CreateAsStudentS1
            handleSubmit={handleSubmit}
            handleChange={handleFieldChange}
            values={values}
            errors={errors}
          />
        ) : currentStep === 2 ? (
          <CreateAsStudentS2
            setIsCompleted={setIsCompleted}
            handleSubmit={handleSubmit}
            handleChange={handleFieldChange}
            values={values}
            errors={errors}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CreateAsStudentUI;
