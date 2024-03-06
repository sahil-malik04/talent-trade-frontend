import { Router } from "./routes/Routes";
import { Navbar } from "./views/components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
