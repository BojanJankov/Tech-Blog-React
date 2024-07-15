import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <section className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
