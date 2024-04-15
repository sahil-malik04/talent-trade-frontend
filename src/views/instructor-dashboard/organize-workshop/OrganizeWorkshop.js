import React, { useState } from "react";
import { GetError, generateTimeOptions } from "../../../utils/commonFunc";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { workshopFormSchema } from "./WorkshopValidation";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

export const OrganizeWorkshop = () => {
  const isUser = useSelector((state) => state.auth.user);
  const timeOptions = generateTimeOptions();
  const [isOrganized, setIsOrganized] = useState(false);

  const initialValues = {
    title: "",
    subject: "",
    date: "",
    timeFrom: "",
    duration: 0,
  };

  const { errors, values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: workshopFormSchema,
    onSubmit: async (values) => {
      try {
        const { date, duration, subject, timeFrom, title } = values;

        const URL = "/workshop/add-workshop";
        const data = {
          instructorId: isUser?.id,
          title,
          subject,
          workshopDate: date,
          workshopTimmings: timeFrom,
          duration,
        };
        const result = await axios.post(URL, data);
        if (result?.status === 200) {
          setIsOrganized(true);
          resetForm();
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  return (
    <div className="rounded overflow-hidden m-5 w-full">
      <h2 className="font-bold text-base mb-5 "> Organize a workshop </h2>
      <div className="flex justify-between mt-8">
        <form className="w-full max-w-lg ml-12" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title"
                type="text"
                value={values?.title}
                onChange={handleChange}
              />
              <GetError value={errors?.title} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject"
                type="text"
                value={values?.subject}
                onChange={handleChange}
              />
              <GetError value={errors?.subject} />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="date"
                type="date"
                value={values?.date}
                onChange={handleChange}
              />
              <GetError value={errors?.date} />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="timeFrom"
              >
                From
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="timeFrom"
                  value={values?.timeFrom}
                  onChange={handleChange}
                >
                  {timeOptions?.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <GetError value={errors?.timeFrom} />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="duration"
              >
                Duration
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="duration"
                type="number"
                value={values?.duration}
                onChange={handleChange}
              />
              <GetError value={errors?.duration} />
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            style={{ fontWeight: "bold", width: "10rem" }}
          >
            Organize
          </Button>
        </form>

        {isOrganized && (
          <div className="mr-44">
            <img
              src="/assets/images/check_gif.gif"
              height={100}
              width={100}
              alt="check-gif"
              className="ml-auto mr-auto"
            />
            <h4 className="mt-2 font-serif"> Organized successfully</h4>
          </div>
        )}
      </div>
    </div>
  );
};
