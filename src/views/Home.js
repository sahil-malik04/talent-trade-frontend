import { useNavigate } from "react-router-dom";
import { ThemeBtn } from "./components/ThemeButton";
import { insDashboard, lnrDashboard, topFeatures } from "../utils/dataUtility";
import { useSelector } from "react-redux";

export const Home = () => {
  const navigate = useNavigate();
  const isUser = useSelector((state) => state.auth.user);

  return (
    <>
      <section className="home-banner">
        <div className="h-screen banner relative">
          <div className="absolute  w-4/12 right-24 top-40">
            <h2 className="font-bold text-4xl text-slate-200">
              Online education is like a rising tide, it's going to lift all
              boats
            </h2>
            <div className="text-center mt-12 text-lg">
              <ThemeBtn
                label={isUser ? "Explore Talent Trade" : "Create Account"}
                width="52"
                onClick={() =>
                  navigate(
                    isUser
                      ? isUser?.role === 1
                        ? insDashboard
                        : lnrDashboard
                      : "/create-account"
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-center text-2xl font-bold mb-8"> Top Features </h3>
        <div className="flex justify-around">
          {topFeatures?.map((item) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={item?.id}
            >
              <h5 className="text-center text-peacockblue-100">
                {" "}
                {item?.for}{" "}
              </h5>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item?.title}</div>
                <p className="text-gray-700 text-base">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex justify-around">
          <div>
            <img
              src="/assets/images/distance-learning.jpg"
              className="rounded-lg"
              alt="connect-from-anywhere"
            />
          </div>

          <div className="w-1/4 text-center">
            <h4 className="font-bold text-xl font-serif text-peacockblue-100">
              Connect from anywhere{" "}
            </h4>
            <p className="text-lg mt-4 shadow-sm">
              Learn or teach anything, from anywhere! The talent trade connects
              learners with instructors worldwide through easy video conference.
              Explore new skills, share your expertise, and make learning an
              adventure without leaving your home. Join us now and discover
              endless possibilities!
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-center text-2xl font-bold mb-8">Meet Co-founder</h3>
        <div className="max-w-sm ml-auto mr-auto rounded overflow-hidden">
          <img
            className="w-64 h-64 rounded-lg ml-auto mr-auto"
            src="/assets/images/founder.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Sahil Malik</div>
            <h4>Software Engineer 🇮🇳 </h4>
          </div>
        </div>
      </section>
    </>
  );
};
