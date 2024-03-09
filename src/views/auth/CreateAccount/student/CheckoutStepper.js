import React from "react";

const CheckoutSteps = ["Step 1", "Step 2"];

const CheckoutStepper = ({ step, isCompleted }) => {
  if (!CheckoutSteps.length) {
    return;
  }

  return (
    <>
      <div className="stepper">
        {CheckoutSteps?.map((item, index) => {
          return (
            <div
              key={item}
              className={`step ${
                step > index + 1 || isCompleted ? "complete" : ""
              } ${step === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {step > index + 1 || isCompleted ? (
                  <span> &#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="">{item} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckoutStepper;
