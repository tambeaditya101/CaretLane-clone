import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import A from "../Assests/slideA.png";
import B from "../Assests/slideB.png";
import C from "../Assests/slideC.png";
import { Link} from "react-router-dom"

export default function SliderCard() {
  return (
    
    <Box maxWidth="100%" margin="auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         
          <Image alt="1" src={A} width={"100%"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        
          <Image alt="2" src={B} width={"100%"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
    
        
          <Image alt="3" src={C} width={"100%"} height={"auto"} />
        </SwiperSlide>

      </Swiper>
      <button className="read-more-btn">Read More</button>
    </Box>
  );
}
