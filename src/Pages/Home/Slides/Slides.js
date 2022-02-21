import React, { useState } from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slide.css";
const Slides = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className=""
            src="https://i.ibb.co/72SwXjC/slider-3.webp"
            alt="First slide"
          />

          <Carousel.Caption>
            <div className="text-start">
              <h3 className="fontStyle">
                Capture Your <br />
                Beautiful Moments
              </h3>
              <Link to="/">
                <Button variant="light" className="btn-started">
                  Buy Now
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/QvS4VMd/slider-4.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="text-start">
              <h3 className="fontStyle">
                Capture Your <br />
                Beautiful Moments
              </h3>
              <Link to="/">
                <Button variant="light" className="btn-started">
                Buy Now
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slides;
