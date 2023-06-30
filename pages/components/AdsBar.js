import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function AdsBar() {
  return (
    <Carousel className="d-flex justify-end">
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src="/ads/ad1.png"
          alt="First slide"
          width={300}
          height={500}
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src="/ads/ad2.png"
          alt="First slide"
          width={300}
          height={500}
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default AdsBar;