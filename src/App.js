import { Canvas } from "@react-three/fiber";
import "./App.css";
import AnimatedModel from "./components/AnimatedModel/AnimatedModel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NameBlock from "./components/NameBlock/NameBlock";

function App() {
  return (
    <div className="app-container">
      <NameBlock />
      <Navbar />
      <AnimatedModel />
      <Footer />
    </div>
  );
}

export default App;
