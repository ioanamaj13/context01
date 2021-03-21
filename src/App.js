import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes } from "./Routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
