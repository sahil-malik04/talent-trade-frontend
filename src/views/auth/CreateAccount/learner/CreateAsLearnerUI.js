import React, { useState } from "react";
import CheckoutStepper from "./CheckoutStepper";
import { CreateAsLearnerS1 } from "./CreateAsLearnerS1";
import { CreateAsLearnerS2 } from "./CreateAsLearnerS2";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { learnerSignupSchema } from "../CreateAccountValidations";
import { encryptData } from "../../../../utils/commonFunc";

export const CreateAsLearnerUI = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    stEmail: "",
    stPassword: "",
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
    validationSchema: learnerSignupSchema(currentStep),
    onSubmit: async (values) => {
      setCurrentStep(2);
      if (isCompleted) {
        try {
          const URL = "/auth/learner-sign-up";

          const selectedIndustry = values?.industry.map(
            (option) => option.value
          );
          const selectedBranch = values?.branch.map((option) => option.value);
          const encryptedPassword = encryptData(values?.stPassword);

          const data = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.stEmail,
            password: encryptedPassword,
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
      <div className="learner-banner h-screen pt-2">
        <CheckoutStepper step={currentStep} isCompleted={isCompleted} />
        {currentStep === 1 ? (
          <CreateAsLearnerS1
            handleSubmit={handleSubmit}
            handleChange={handleFieldChange}
            values={values}
            errors={errors}
          />
        ) : currentStep === 2 ? (
          <CreateAsLearnerS2
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
