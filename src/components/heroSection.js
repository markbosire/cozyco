import "../index.css";
function HeroSection() {
  return (
    <div className="heroSection">
      <section>
        <span>Furniture for living</span>
        <div className="imagesContainer">
          <div className="imgContainer one">
            <img src="./images/example1.png" alt=""></img>
          </div>
          <div className="imgContainer two">
            <img src="./images/example2.png" alt=""></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
