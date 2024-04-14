import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Workshops = () => {
  const [workshopData, setWorkshopsData] = useState([]);

  const getWorkshops = async () => {
    try {
      const URL = "/workshop/get-workshops";
      const result = await axios.get(URL);
      if (result?.status === 200) {
        setWorkshopsData(result?.data?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    getWorkshops();
  }, []);

  return (
    <div className="w-full flex flex-wrap m-5">
      {workshopData?.length ? (
        workshopData?.map((item) => (
          <div className="lg:flex h-64 max-w-sm m-2" key={item?.id}>
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url(${
                  item?.picture
                    ? item?.picture
                    : "/assets/images/workshop_banner.jpg"
                })`,
              }}
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {item?.title}
                </div>
                <p className="text-base font-semibold text-green-400">
                  {item?.workshopDate}
                </p>
                <p className="text-sm">{item?.workshopTimmings}</p>
              </div>

              <div>
                By:
                <p className="text-sm">
                  Mr. {item?.instructor?.firstName} {item?.instructor?.lastName}
                </p>
              </div>
              <div className="mt-2 mb-1">
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  style={{ fontSize: "11px" }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h4> No workshops organized!</h4>
      )}
    </div>
  );
};

export default Workshops;
