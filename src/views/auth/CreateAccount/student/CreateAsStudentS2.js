import { useState } from "react";
import Select from "react-select";
import { ThemeBtn } from "../../../components/ThemeButton";
import CheckoutStepper from "./CheckoutStepper";

const industryOptions = [
  { value: "DM", label: "Digital Marketing" },
  { value: "IT", label: "IT" },
  { value: "soft-skills", label: "Soft skills" },
  { value: "finance", label: "Finance" },
  { value: "accounting", label: "Accounting" },
];

const branchOptions = [
  { value: "accounting", label: "C" },
  { value: "accounting", label: "C++" },
  { value: "DM", label: "CSS" },
  { value: "IT", label: "Javascript" },
  { value: "soft-skills", label: "React" },
  { value: "finance", label: "Angular" },
  { value: "accounting", label: "MySQL" },
  { value: "accounting", label: "HTML" },
  { value: "accounting", label: "PHP" },
  { value: "accounting", label: "Python" },
];
const timeOptions = [];
for (let hour = 0; hour < 24; hour++) {
  let hourString = hour.toString().padStart(2, "0");
  timeOptions.push({ value: hourString + ":00", label: hourString + ":00" });
}

export const CreateAsStudentS2 = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <>
      <div className="student-banner h-screen">
        <CheckoutStepper step={2} isCompleted={isCompleted} />
        <form className="bg-white shadow-md rounded w-5/12 ml-auto mr-auto mt-6 pt-4 pb-10">
          <h2 className="text-md text-center font-bold">
            {" "}
            What areas of expertise are you currently focused on?
          </h2>
          <div className="px-8 pt-12 pb-12 mb-4">
            <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
              <div className="row-start-1">
                <Select
                  options={industryOptions}
                  isMulti
                  placeholder={"Choose Industry"}
                />
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 mb-6">
              <div className="row-start-1">
                <Select
                  options={branchOptions}
                  isMulti
                  placeholder={"Choose Branch"}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 mb-6">
              <div className="col-span-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Preferred learning style
                </label>
              </div>
              <div className="col-span-8">
                <input
                  type="radio"
                  id="one-on-one"
                  name="preferred_style"
                  value="one-on-one"
                />
                <label htmlFor="one-on-one" className="mr-4 ml-1">
                  One-on-one session
                </label>

                <input
                  type="radio"
                  id="group-classes"
                  name="preferred_style"
                  value="group-classes"
                />
                <label htmlFor="group-classes" className="ml-1">
                  Group classes
                </label>
              </div>
            </div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Preferred Time
                </label>
              </div>
              <div className="col-span-8">
                <div className="grid grid-cols-12 gap-4 ">
                  <div className="col-span-6">
                    <Select options={timeOptions} placeholder={"From"} />
                  </div>
                  <div className="col-span-6">
                    <Select options={timeOptions} placeholder={"To"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="text-center mt-2">
          <ThemeBtn
            label={"Finish"}
            width={32}
            onClick={() => setIsCompleted(true)}
          />
        </div>
      </div>
    </>
  );
};
