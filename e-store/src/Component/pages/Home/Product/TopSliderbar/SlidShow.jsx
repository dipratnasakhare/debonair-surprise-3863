import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@chakra-ui/react";
export default function SlideShowclear() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  let sliderimg = [
    'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg',
    'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg',
    'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif',
    'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg',
    'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg',
  ]

  return (
    <Box
   
    >
    <Carousel
  swipeable={false}
  time={5}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
   autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  itemClass="carousel-item-padding-10-px"
>
  {sliderimg.map((ele)=>{
    return(
      <Box  
      
      >
      <img src={ele} alt="" />
    </Box>
    )
  })}
  

</Carousel>
</Box>
  );
}
