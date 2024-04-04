import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const InstructorsList = () => {
  const isUser = useSelector((state) => state.auth.user);

  const [instructors, setInstructors] = useState([]);
  const getInstructos = async () => {
    try {
      const URL = "/instructor/get-instructors";
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setInstructors(result?.data?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getInstructos();
  }, []);

  const handleScheduleMeeting = async (insId) => {
    try {
      const URL = "/meeting/schedule-meeting";
      const data = {
        learnerId: isUser?.id,
        instructorId: insId,
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
    <div className="flex flex-wrap">
      {instructors?.length ? (
        instructors.map((item) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-5"
            key={item?.id}
          >
            <img className="h-40" src={item?.picture} alt="instructor" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {item?.firstName + " " + item?.lastName}
              </div>
              <p className="text-gray-700 text-base">
                Expertise:{" "}
                <span className="capitalize">
                  {JSON.parse(item?.AOE).join(", ")}
                </span>
              </p>
              <p className="text-gray-700 text-base">
                Usually available:{" "}
                <span className="text-green-800"> 05:00pm - 06:00pm </span>
              </p>
            </div>
            <div className="px-6 pb-4">
              <Button
                variant="outlined"
                size="small"
                style={{ fontWeight: "bold" }}
                onClick={() => handleScheduleMeeting(item?.id)}
              >
                {" "}
                Schedule a meeting
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h4>No result found! </h4>
      )}
    </div>
  );
};

export default InstructorsList;
