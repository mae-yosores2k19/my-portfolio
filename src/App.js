import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <AnimatedRoutes/>
        </Router>
      </header>
    </div>
  );
}

export default App;
