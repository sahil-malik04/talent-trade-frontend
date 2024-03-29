import { Router } from "./routes/Routes";
import { Navbar } from "./views/components/layout/Navbar";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import Footer from "./views/components/layout/Footer";

function App() {
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
