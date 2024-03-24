import React from "react";
import { GetError } from "../../../../utils/commonFunc";

export const InstructorForm1 = ({ handleChange, values, errors }) => {
  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
        <div className="row-start-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            onChange={handleChange}
            value={values?.firstName}
          />
          <GetError value={errors?.firstName} />
        </div>
        <div className="row-start-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            onChange={handleChange}
            value={values?.lastName}
          />
          <GetError value={errors?.lastName} />
        </div>
      </div>

      <div className="mb-8">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="insEmail"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="insEmail"
          type="text"
          onChange={handleChange}
          value={values?.insEmail}
        />
        <GetError value={errors?.insEmail} />
      </div>
      <div className="mb-0">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="insPassword"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          id="insPassword"
          type="password"
          onChange={handleChange}
          value={values?.insPassword}
        />
        <GetError value={errors?.insPassword} />
      </div>
    </div>
  );
};
