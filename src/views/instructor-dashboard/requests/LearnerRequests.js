import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LearnerRequests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const getLearnerRequests = async () => {
    try {
      const URL = "/meeting/get-meeting-requests";
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setRequestsData(result?.data?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getLearnerRequests();
  }, []);

  return (
    <div className="rounded overflow-hidden m-5 w-full">
      <h2 className="font-bold text-base mb-5 "> Learner Requests </h2>
      <div>
        {requestsData?.length ? (
          requestsData?.map((item) => (
            <div
              className="bg-red-400 text-white w-2/3 flex justify-between items-center m-4"
              key={item?.id}
            >
              <div className="m-2">
                <h5>
                  {item?.learner?.firstName} {item?.learner?.lastName}{" "}
                </h5>
                <h6 className="mt-1"> Wants to learn: Python </h6>
                <h6 className="mt-1"> On: 25-04-2024 At: 08:00</h6>
              </div>
              <div className="m-2">
                <button className="mr-3"> Accept </button>
                <button> Decline </button>
              </div>
            </div>
          ))
        ) : (
          <h4>No result found! </h4>
        )}
      </div>
    </div>
  );
};

export default LearnerRequests;
