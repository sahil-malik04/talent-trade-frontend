import { Router } from "./routes/Routes";
import { Navbar } from "./views/components/layout/Navbar";
import "./App.css";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
