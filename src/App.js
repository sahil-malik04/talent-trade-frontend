import { Router } from "./routes/Routes";
import { Navbar } from "./views/components/layout/Navbar";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./views/components/layout/Footer";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const isUser = useSelector((state) => state.auth.user);
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  axios.defaults.headers.common = { Authorization: `Bearer ${isUser?.token}` };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
