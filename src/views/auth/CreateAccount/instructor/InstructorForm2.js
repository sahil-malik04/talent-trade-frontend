import Select from "react-select";
import React from "react";
import {
  branchOptions,
  genderOptions,
  industryOptions,
} from "../../../../utils/dataUtility";

export const InstructorForm2 = () => {
  return (
    <>
      <div>
        <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
          <div className="row-start-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <Select
              options={genderOptions}
              defaultValue={genderOptions[0]}
              className="w-48"
            />
          </div>
          <div className="row-start-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="exp"
            >
              Years of experience
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exp"
              type="text"
            />
          </div>
        </div>

        <div className="mb-5">
          <Select
            options={industryOptions}
            isMulti
            placeholder={"Choose your industry "}
          />
        </div>
        <div className="mb-5">
          <Select
            options={branchOptions}
            isMulti
            placeholder={"Select your expertise "}
          />
        </div>
      </div>
    </>
  );
};
