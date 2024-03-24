import Select from "react-select";
import React from "react";
import {
  branchOptions,
  genderOptions,
  industryOptions,
} from "../../../../utils/dataUtility";
import { GetError } from "../../../../utils/commonFunc";

export const InstructorForm2 = ({ handleChange, values, errors }) => {
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
              onChange={(selectedOption) => {
                handleChange({
                  target: {
                    name: "gender",
                    value: selectedOption,
                  },
                });
              }}
            />
            <GetError value={errors?.gender} />
          </div>
          <div className="row-start-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="YOE"
            >
              Years of experience
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="YOE"
              type="text"
              onChange={handleChange}
              value={values?.YOE}
            />
            <GetError value={errors?.YOE} />
          </div>
        </div>

        <div className="mb-5">
          <Select
            options={industryOptions}
            isMulti
            placeholder={"Choose your industry"}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "industry",
                  value: selectedOption,
                },
              });
            }}
          />
          <GetError value={errors?.industry} />
        </div>
        <div className="mb-5">
          <Select
            options={branchOptions}
            isMulti
            placeholder={"Select your expertise"}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "AOE",
                  value: selectedOption,
                },
              });
            }}
          />
          <GetError value={errors?.AOE} />
        </div>
      </div>
    </>
  );
};
