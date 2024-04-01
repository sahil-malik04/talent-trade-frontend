import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const ScheduleMeetings = () => {
  return (
    <div className="rounded overflow-hidden m-5">
      <h2 className="font-bold text-base mb-5 "> Your Scheduled Meetings </h2>
      <div className="schedule-m">
        <div className="flex justify-between items-center">
          <div className="font-serif ml-4">
            <h4> Accounting </h4>
            <h5> With Mr. Alex</h5>
            <h5> 06:00PM - 07:00PM</h5>
          </div>
          <div className="mr-4 font-serif">
            <h5>31-03-2024</h5>
            <h5>
              Payment
              <span>
                <DoneIcon color="success" />
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="schedule-m">
        <div className="flex justify-between items-center">
          <div className="font-serif ml-4">
            <h4> Accounting </h4>
            <h5> With Mr. Christ</h5>
            <h5> 09:00PM - 10:00PM</h5>
          </div>
          <div className="mr-4 font-serif">
            <h5>31-03-2024</h5>
            <h5>
              Payment
              <span>
                <DoneIcon color="success" />
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="schedule-m">
        <div className="flex justify-between items-center">
          <div className="font-serif ml-4">
            <h4> Accounting </h4>
            <h5> With Mr. Alex</h5>
            <h5> 09:00PM - 11:00PM</h5>
          </div>
          <div className="mr-4 font-serif">
            <h5>31-03-2024</h5>
            <h5>
              Payment
              <span>
                <DoneIcon color="success" />
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetings;
