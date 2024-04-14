import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CheckIcon from "@mui/icons-material/Check";
import SyncDisabledIcon from "@mui/icons-material/SyncDisabled";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { convertToAMPM } from "../../utils/commonFunc";

const ScheduleAMeeting = () => {
  const params = useParams();
  const { instructorName, instructorId } = params;
  const isUser = useSelector((state) => state.auth.user);

  const [instructor, setInstructor] = useState({});
  const [dateValue, setDateValue] = useState(new Date());

  const getInstuctorById = async () => {
    try {
      const URL = `/instructor/get-instructor-by-id?id=${instructorId}`;
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setInstructor(result?.data?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    getInstuctorById();
  }, []);

  const onChangeDate = (date) => {
    setDateValue(date);
  };

  const handleScheduleMeeting = async () => {
    try {
      const URL = "/meeting/schedule-meeting";
      const data = {
        learnerId: isUser?.id,
        instructorId,
      };
      const result = await axios.post(URL, data);
      if (result.status === 200) {
        toast.success(result?.data?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div className="rounded overflow-hidden m-5 w-full">
      <h2 className="font-bold text-base mb-5 ">
        Scheduled a Meeting with Mr. {instructorName}
      </h2>
      <div className="pt-6 pb-12  flex justify-around">
        <Calendar onChange={onChangeDate} value={dateValue} />

        <div>
          <h4 className="font-semibold text-lg"> {dateValue.toDateString()}</h4>
          <div className="flex mt-2 pt-2">
            <div className="mr-4">
              <h4 className="font-semibold">
                {convertToAMPM(instructor?.availableTimeFrom)} -{" "}
                {convertToAMPM(instructor?.availableTimeTo)}
              </h4>
            </div>
            <CheckIcon style={{ color: "green" }} /> Available
          </div>
          <div>
            <h4 className="font-semibold pt-2 pb-8">
              Hourly Charge:{" "}
              <span className="font-normal"> {instructor?.hourlyCharge}</span>
            </h4>
          </div>
          <Button
            variant="contained"
            size="small"
            style={{ fontWeight: "bold" }}
            onClick={handleScheduleMeeting}
          >
            Schedule a meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAMeeting;

// <span>
//             <SyncDisabledIcon style={{ color: "red" }} /> Occupied
//           </span>
