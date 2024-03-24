import Select from "react-select";
import { ThemeBtn } from "../../../components/ThemeButton";
import { branchOptions, industryOptions } from "../../../../utils/dataUtility";
import { GetError } from "../../../../utils/commonFunc";

const timeOptions = [];
for (let hour = 0; hour < 24; hour++) {
  let hourString = hour.toString().padStart(2, "0");
  timeOptions.push({ value: hourString + ":00", label: hourString + ":00" });
}

export const CreateAsStudentS2 = ({
  setIsCompleted,
  handleSubmit,
  handleChange,
  values,
  errors,
}) => {
  return (
    <>
      <form
        className="rounded w-5/12 ml-auto mr-auto mt-6 pt-4 pb-10"
        onSubmit={handleSubmit}
      >
        <div className="bg-white shadow-md">
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
                  id="industry"
                  name="industry"
                  value={values.industry}
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
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 mb-6">
              <div className="row-start-1">
                <Select
                  options={branchOptions}
                  isMulti
                  placeholder={"Choose Branch"}
                  id="branch"
                  name="branch"
                  value={values.branch}
                  onChange={(selectedOption) => {
                    handleChange({
                      target: {
                        name: "branch",
                        value: selectedOption,
                      },
                    });
                  }}
                />
                <GetError value={errors?.branch} />
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
                  name="preferredLearning"
                  value="1"
                  checked={values.preferredLearning === "1"}
                  onChange={handleChange}
                />
                <label htmlFor="one-on-one" className="mr-4 ml-1">
                  One-on-one session
                </label>

                <input
                  type="radio"
                  id="group-classes"
                  name="preferredLearning"
                  value="2"
                  checked={values.preferredLearning === "2"}
                  onChange={handleChange}
                />
                <label htmlFor="group-classes" className="ml-1">
                  Group classes
                </label>
              </div>
              <GetError value={errors?.preferredLearning} />
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
                    <Select
                      options={timeOptions}
                      placeholder={"From"}
                      id="from"
                      name="from"
                      value={values.from}
                      onChange={(selectedOption) => {
                        handleChange({
                          target: {
                            name: "from",
                            value: selectedOption,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-span-6">
                    <Select
                      options={timeOptions}
                      placeholder={"To"}
                      id="to"
                      name="to"
                      value={values.to}
                      onChange={(selectedOption) => {
                        handleChange({
                          target: {
                            name: "to",
                            value: selectedOption,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <GetError value={errors?.from ? errors?.from : errors?.to} />
          </div>
        </div>
        <div className="text-center mt-2">
          <ThemeBtn
            label={"Finish"}
            width={32}
            onClick={() => setIsCompleted(true)}
          />
        </div>
      </form>
    </>
  );
};
