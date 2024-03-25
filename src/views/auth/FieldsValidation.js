import * as Yup from "yup";

export const loginFormSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const setNewPasswordSchema = Yup.object({
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string().required("Confirm new password is required"),
});
