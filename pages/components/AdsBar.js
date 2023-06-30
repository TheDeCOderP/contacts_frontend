import Carousel from 'react-bootstrap/Carousel';

function AdsBar() {
  return (
    <Carousel className="d-flex justify-end">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/ads/ad1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/ads/ad2.png"
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default AdsBar;