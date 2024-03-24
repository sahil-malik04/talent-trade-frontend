import * as Yup from "yup";

export const studentSignupSchema = (step) =>
  Yup.object({
    firstName: Yup.string().required("First Name is required"),
    stuEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    stuPassword: Yup.string().required("Password is required"),
    industry:
      step === 2
        ? Yup.array()
            .of(Yup.object())
            .min(1, "Please select at least one industry")
            .required("Industry selection is required")
        : Yup.array(),
    branch:
      step === 2
        ? Yup.array()
            .of(Yup.object())
            .min(1, "Please specify at least one branch")
            .required("Branch selection is required")
        : Yup.array(),
    preferredLearning:
      step === 2
        ? Yup.string().required("Preferred learning mode is required")
        : Yup.string(),
    from:
      step === 2
        ? Yup.object().required("Please specify preferred time")
        : Yup.object(),
    to:
      step === 2
        ? Yup.object().required("Please specify preferred time")
        : Yup.object(),
  });
