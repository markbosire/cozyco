import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Import the CSS file

const settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4, // show 5 slides by default
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // show 1 slide at 800px
        slidesToScroll: 1,
      },
    },
  ],
};

function Collection() {
  return (
    <div className="collection">
      <section>
        <span>Explore by collection</span>
        <Slider {...settings}>
          <div className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url('images/img1.png')` }}
            >
              <div className="gradient">
                <h3>Dining Room Furniture</h3>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url('images/img2.png')` }}
            >
              <div className="gradient">
                <h3>Bedroom Furniture</h3>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url('images/img3.png')` }}
            >
              <div className="gradient">
                <h3>Kitchen Furniture</h3>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url('images/img4.png')` }}
            >
              <div className="gradient">
                <h3>Bathroom Furniture</h3>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url('images/img5.png')` }}
            >
              <div className="gradient">
                <h3>Living room Furniture</h3>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Collection;
