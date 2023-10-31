import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { RouteLayout } from "./navigation/RouteLayout";

function App() {
  return (
    <div className="App">
      <RouteLayout />
    </div>
  );
}

export default App;
