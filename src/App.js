import { Router } from "./routes/Routes";
import { Navbar } from "./views/components/layout/Navbar";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
