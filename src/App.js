import "./css/main.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
