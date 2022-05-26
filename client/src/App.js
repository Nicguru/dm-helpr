import logo from "./logo.svg";
import "./App.css";
import AppNav from "./components/AppNav";
import Footer from "./components/Footer";
import Album from "./components/Album";

function App() {
  return (
    <>
      <AppNav />
      <Album />
      <Footer />
    </>
  );
}

export default App;
