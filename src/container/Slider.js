import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../../node_modules/react-bootstrap/Carousel';
import '../../node_modules/react-bootstrap/CarouselItem';
import First from '../assetsimg/386afe70-f81a-42ca-928d-79a7c126f70d.jpg';
import Second from '../assetsimg/51cb9995-a05a-4272-aff5-789cc5f31812.jpg';
import Third from '../assetsimg/a10bf44a-01ff-4198-8ecb-15c84e09e45b.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
function Slider() {
    const matches = useMediaQuery('(min-width:901)');
    const carousel={
        position:'relative',
        width: '100%',
        marginTop: matches?'-25px':'0px',
        height:'320px',
       backgroundColor:'blue',
       textAlign:'center'
    }
    const imgstyle={
        position:'relative',
        width: '100%',
        height: '320px'
    }
  return  <> 
  
      {/* //banner of shop; */}
      <div className="container-fluid text-white text-center mt-md-5 " style={{ height:'380px' }}>
      <div className="carousel bg-success " style={carousel}>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={First}
                    alt="First slide"
                    style={imgstyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Second}
                    alt="Second slide"
                    style={imgstyle}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Third}
                    alt="Third slide"
                    style={imgstyle}
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    </div>
  </>
}

export default Slider;
