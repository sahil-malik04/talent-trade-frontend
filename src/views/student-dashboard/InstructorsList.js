import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const getInstructos = async () => {
    try {
      const URL = "/instructor/get-instructors";
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setInstructors(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getInstructos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {instructors?.length > 0
        ? instructors.map((item) => (
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
                  Expertise: {JSON.parse(item?.AOE).join(", ")}
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
                >
                  {" "}
                  Schedule a meeting
                </Button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default InstructorsList;
