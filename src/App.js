import "./App.css";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <Routing />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
