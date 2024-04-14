import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { lnrDashboard } from "../../utils/dataUtility";

const InstructorsList = () => {
  const navigate = useNavigate();

  const [instructors, setInstructors] = useState([]);
  const getInstructors = async () => {
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
    getInstructors();
  }, []);

  const handleScheduleMeeting = async (insName, insId) => {
    if (insId) {
      navigate(`${lnrDashboard}/schedule-a-meeting/${insName}/${insId}`);
    }
  };

  return (
    <div className="flex flex-wrap m-5">
      {instructors?.length ? (
        instructors.map((item) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-2"
            key={item?.id}
          >
            <img
              className="h-40 ml-auto mr-auto"
              src={
                item?.picture
                  ? item?.picture
                  : item?.gender === "male"
                  ? "/assets/images/user_m_img.png"
                  : "/assets/images/user_f_img.png"
              }
              alt="instructor"
            />
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
                onClick={() => handleScheduleMeeting(item?.firstName, item?.id)}
              >
                {" "}
                Check Availability
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
