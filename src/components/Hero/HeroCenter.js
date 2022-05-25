import { Carousel } from "react-bootstrap";
import c1 from "../../assets/images/C1.jpg";
// import c2 from "../../assets/images/C2.jpg";

function HeroCenter() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to The Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block h-50 w-100" src={c2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Welcome to The Blog</h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default HeroCenter;
