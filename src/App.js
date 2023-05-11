import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Collection from "./components/collection";
import MidSection from "./components/midSection";
import GridSection from "./components/gridSection";
import Review from "./components/review";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Collection />
      <MidSection />
      <GridSection />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
