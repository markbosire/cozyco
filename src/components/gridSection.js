import "../index.css";
function GridSection() {
  return (
    <div className="GridSection">
      <section>
        <div className="row1">
          <div className="shop-component">
            <img
              src="./images/1.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">White Oak Chair</h2>
            <p className="shop-component-price">5000</p>
          </div>
          <div className="shop-component">
            <img
              src="./images/2.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">Hardwood Stool</h2>
            <p className="shop-component-price">2000</p>
          </div>
          <div className="shop-component">
            <img
              src="./images/3.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">Sculpture</h2>
            <p className="shop-component-price">15000</p>
          </div>
        </div>
        <div className="row2">
          <div className="shop-component">
            <img
              src="./images/4.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">Golden Lamp</h2>
            <p className="shop-component-price">7000</p>
          </div>
          <div className="shop-component">
            <img
              src="./images/1.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">White Oak Chair</h2>
            <p className="shop-component-price">5000</p>
          </div>
          <div className="shop-component">
            <img
              src="./images/5.png"
              alt="White Oak Chair"
              className="shop-component-image"
            />
            <h2 className="shop-component-name">Hanging Golden Lamp</h2>
            <p className="shop-component-price">10000</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default GridSection;
