import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

export const CreateAccountOptions = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center space-x-12 mt-16">
        <div
          className="w-52 h-64 border-4 border-gray-400 cursor-pointer text-slate-900 hover:bg-peacockblue-200 hover:text-white transition-all duration-200"
          onClick={() => navigate("/create-as-learner")}
        >
          <div className="text-center mt-12">
            <SchoolIcon style={{ fontSize: "50px" }} />
          </div>
          <h4 className="text-center mt-8">Register as a Learner</h4>
        </div>
        <div
          className="w-52 h-64 border-4 border-gray-400 cursor-pointer text-slate-900 hover:bg-peacockblue-200 hover:text-white transition-all duration-200"
          onClick={() => navigate("/create-as-instructor")}
        >
          <div className="text-center mt-12">
            <SchoolIcon style={{ fontSize: "50px" }} />
          </div>
          <h4 className="text-center mt-8">Register as a Instructor</h4>
        </div>
      </div>
    </>
  );
};
