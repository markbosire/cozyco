import Slider from "react-slick";
import "../index.css";
import { useRef } from "react";

function Review() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index); // Use sliderRef.current to access the Slider component
  };

  return (
    <div className="reviewSection">
      <div className="left">
        <section>
          <Slider {...settings} ref={sliderRef}>
            <div className="review">
              <p>
                Cozy & Co Furniture exceeded my expectations with their
                exceptional selection and service. My new bed from them is a
                dream come true - comfortable, stylish, and built to last. The
                staff went above and beyond to ensure my satisfaction. Thank
                you, Cozy & Co Furniture, for transforming my bedroom into a
                cozy sanctuary!
              </p>
              <div className="reviewerdiv">
                <span className="reviewer">John Doe</span>
                <div className="navigationContainer">
                  <span className="navigation" onClick={() => goToSlide(2)}>
                    &#8592;
                  </span>
                  <span className="navigation" onClick={() => goToSlide(1)}>
                    &#8594;
                  </span>
                </div>
              </div>
            </div>
            <div className="review">
              <p>
                I absolutely love my new Chesterfield sofa from Cozy & Co
                Furniture! It's so comfortable and stylish, and it looks perfect
                in my living room. The staff at the store were so helpful and
                made the whole process a breeze. Thanks, Cozy & Co Furniture!
              </p>
              <div className="reviewerdiv">
                <span className="reviewer">Jane Smith</span>
                <div className="navigationContainer">
                  <span className="navigation" onClick={() => goToSlide(0)}>
                    &#8592;
                  </span>
                  <span className="navigation" onClick={() => goToSlide(2)}>
                    &#8594;
                  </span>
                </div>
              </div>
            </div>
            <div className="review">
              <p>
                The dining set I purchased from Cozy & Co Furniture is
                absolutely fantastic. The design is exquisite, the quality is
                top-notch, and it has become the centerpiece of my dining area.
                Thank you, Cozy & Co Furniture, for making mealtime a delight!
              </p>
              <div className="reviewerdiv">
                <span className="reviewer">Michael Johnson</span>
                <div className="navigationContainer">
                  <span className="navigation" onClick={() => goToSlide(1)}>
                    &#8592;
                  </span>
                  <span className="navigation" onClick={() => goToSlide(0)}>
                    &#8594;
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
      <div className="right">
        <div>Shop natural oak collection</div>
      </div>
    </div>
  );
}

export default Review;
