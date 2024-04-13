import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import PendingIcon from "@mui/icons-material/Pending";
import { toast } from "react-toastify";
import axios from "axios";
import { formatDate } from "../../utils/commonFunc";

export const ScheduledMeetings = () => {
  const [allScheduleMeetings, setAllScheduleMeetings] = useState([]);

  const getScheduleMeetings = async () => {
    try {
      const URL = "/meeting/get-scheduled-meetings";
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setAllScheduleMeetings(result?.data?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getScheduleMeetings();
  }, []);

  return (
    <div className="rounded overflow-hidden m-5">
      <h2 className="font-bold text-base mb-5 "> Your Scheduled Meetings </h2>
      {allScheduleMeetings?.length ? (
        allScheduleMeetings?.map((item) => (
          <div className="schedule-m" key={item?.id}>
            <div className="flex justify-between items-center">
              <div className="font-serif ml-4">
                <h4 className="capitalize">
                  {" "}
                  {JSON.parse(item?.instructor?.AOE).join(", ")}{" "}
                </h4>
                <h5>
                  {" "}
                  With Mr.
                  {item?.instructor?.firstName +
                    " " +
                    item?.instructor?.lastName}
                </h5>
                <h5> 06:00PM - 07:00PM</h5>
              </div>
              <div className="mr-4 font-serif">
                <h5> {formatDate(item?.createdAt)}</h5>
                <h5>
                  Payment
                  <span className="ml-1">
                    {item?.isPaymentSuccess ? (
                      <DoneIcon color="success" />
                    ) : (
                      <PendingIcon color="error" />
                    )}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h4> No meeting scheduled yet!</h4>
      )}
    </div>
  );
};
