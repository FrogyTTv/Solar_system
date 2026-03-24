import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from "./components/Hero";
import Solar_system from "./components/Solar_system";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <Hero />
      <Solar_system />
    </div>
  );
};

export default App;