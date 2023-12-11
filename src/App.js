import "./App.css";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import NameBlock from "./components/NameBlock/NameBlock";

function App() {
  return (
    <BrowserRouter>
      <Routing />
      <NameBlock />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
