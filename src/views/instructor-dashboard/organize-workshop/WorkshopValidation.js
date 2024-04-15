import * as Yup from "yup";

export const workshopFormSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subject: Yup.string().required("Subject is required"),
  date: Yup.string().required("Date is required"),
  timeFrom: Yup.string().required("Time is required"),
  duration: Yup.string().required("Duration is required"),
});
