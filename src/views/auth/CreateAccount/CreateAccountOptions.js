import { useNavigate } from "react-router-dom";

export const CreateAccountOptions = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center space-x-12 mt-16">
        <div className="w-52 h-64 border-4 border-gray-400 cursor-pointer" onClick={()=> navigate("/create-as-student-s1")}>
          Register as a Student{" "}
        </div>
        <div className="w-52 h-64 border-4 border-gray-400 cursor-pointer">
          Register as a Instructor
        </div>
      </div>
    </>
  );
};
