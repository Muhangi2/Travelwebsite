import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Services from "./components/services/Services";
import Testmonials from "./components/testimonials/Testmonials";
import Footer from "./components/footer/Footer";
import Blog from "./components/blogs/Blog";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Services />
      <Blog />
      <Testmonials />
      <Footer />
    </>
  );
}

export default App;
