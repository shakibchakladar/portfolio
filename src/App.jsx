import Navbar from "./components/Navbar";
import About from "./constants/About";
import Hero from "./constants/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text--300">
      <div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
