import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Services from "./components/services/Services";
import Testmonials from "./components/testimonials/Testmonials";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Search />
      <Services />
      <Testmonials />
    </>
  );
}

export default App;
