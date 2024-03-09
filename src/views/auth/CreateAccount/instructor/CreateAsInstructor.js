import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ThemeBtn } from "../../../components/ThemeButton";
import { InstructorForm1 } from "./InstructorForm1";
import { InstructorForm2 } from "./InstructorForm2";

export const CreateAsInstructor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="h-screen flex justify-evenly mt-12">
        <div className="mr-14">
          <img
            src="/assets/images/teacher_banner.png"
            style={{ height: "28rem" }}
            alt="teacher-banner"
          />
        </div>
        <div>
          <form className="bg-white shadow-md rounded w-full ml-auto mt-6">
            <h2 className="text-md text-center font-bold">
              The art of teaching is the art of assisting discovery
            </h2>
            {currentStep === 2 && (
              <span
                className="cursor-pointer ml-1"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowBackIcon style={{ color: "#016795" }} />
              </span>
            )}

            <div className="px-8 pt-14 pb-12 mb-4">
              {currentStep === 1 ? <InstructorForm1 /> : <InstructorForm2 />}

              {currentStep === 1 && (
                <div className="text-right">
                  <span className="text-sm">Already have an account?</span>
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-1 cursor-pointer"
                    to={"/login"}
                  >
                    Sign in
                  </Link>
                </div>
              )}

              <div className="text-center mt-5" style={{marginTop: currentStep === 2 && "50px"}}>
                <ThemeBtn
                  label={currentStep === 2 ? "Create Account" : "Next"}
                  width={currentStep === 2 ? 40 : 32}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentStep(() => currentStep + 1);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
