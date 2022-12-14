import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import styled from "./stylebox/LoginFooter.module.css";

export default function Footer() {

  let navigate = useNavigate()

   let Servise = [
    "Help Center/FAQs",
    "Returns",
    "Shipping Information",
    "Track My Order",
    "Cookie Setting"
   ]


  

  return (
    <Box>
      <Box height="6rem" mb={4} >
          <Text mb={4}>Sign up to our newsletters and receive the latest exclusive discounts and deals</Text>
           <Button onClick={()=>navigate("/login")}  _hover="none" color="white" bg="black">SIGN ME UP</Button>
          </Box>
    <Box borderTop="1px solid">

      <Box  className={styled.Login}>


        <Box>
            <Box><Text>Costomers Servise</Text></Box>
            {Servise.map((ele)=>{
              return(
                <Text>{ele}</Text>
              )
            })}
        </Box>

       
         
       
       

       
      </Box>
    </Box>
    </Box>
  );
}
