import * as Yup from "yup";

export const studentSignupSchema = (step) =>
  Yup.object({
    firstName: Yup.string().required("First Name is required"),
    stEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    stPassword: Yup.string().required("Password is required"),
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

export const instructorSignupSchema = (step) =>
  Yup.object({
    firstName: Yup.string().required("First Name is required"),
    insEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    insPassword: Yup.string().required("Password is required"),
    gender:
      step === 2 ? Yup.object().required("Gender is required") : Yup.object(),
    YOE:
      step === 2
        ? Yup.string().required("Please specify years of experience")
        : Yup.string(),
    industry:
      step === 2
        ? Yup.array()
            .of(Yup.object())
            .min(1, "Please select at least one industry")
            .required("Industry selection is required")
        : Yup.array(),
    AOE:
      step === 2
        ? Yup.array()
            .of(Yup.object())
            .min(1, "Please select your expertise")
            .required("Expertise is required")
        : Yup.array(),
  });
