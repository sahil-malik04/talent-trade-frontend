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

export const CreateAsStudentS2 = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <>
      <div>
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
            <div className="grid grid-rows-1 grid-flow-col gap-4 mb-5">
              <div className="row-start-1">
                <Select
                  options={branchOptions}
                  isMulti
                  placeholder={"Choose Branch"}
                />
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
