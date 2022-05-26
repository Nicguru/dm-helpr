import logo from "./logo.svg";
import "./App.css";
import AppNav from "./components/AppNav";
import Footer from "./components/Footer";
import Album from "./components/Album";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <AppNav />
      <main className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
