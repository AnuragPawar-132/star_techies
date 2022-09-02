import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiBitcoincash } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import Stockimage from "../components/Stockimage.jpg";

const Navbar = () => {
  const [stockimage, setstockimage] = useState("");
  const handleClick = () => {
    setstockimage("none");
  };
  return (
    <Box>
      <Flex
        style={{ minWidth: "450px" }}
        justifyContent="space-between"
        padding="10px 30px 10px 30px"
        gap="20px"
        color="black"
        background="gray.100"
      >
        <Link to="/" onClick={(e) => handleClick()}>
          <Heading
            fontSize="16px"
            backgroundColor="gray.300"
            padding="8px"
            borderRadius="10px"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            {" "}
            <SiBitcoincash color="black" /> Crypto Currency
          </Heading>
        </Link>
        <Link to="/sharemarket" onClick={(e) => handleClick()}>
          <Heading
            fontSize="16px"
            backgroundColor="gray.300"
            padding="8px"
            borderRadius="10px"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            {" "}
            <AiOutlineStock color="black" /> Share Market
          </Heading>{" "}
        </Link>
      </Flex>
      <Box>
        <marquee>@ Best place for live crypto & stock updates</marquee>
        <Image src={Stockimage} width="100%" display={stockimage} />
      </Box>
    </Box>
  );
};

export default Navbar;
