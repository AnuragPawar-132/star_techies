import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  
  Th,
  Thead,
  Tr,
  Flex
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCrypto } from "../redux/action";

const Crypto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrypto);
  }, [dispatch]);

  const cryptodata = useSelector((store) => store.cryptodata.data);
  console.log(cryptodata);

  return (
    <div style={{height:"300px", overflowY:"scroll",margin:"auto",border:"1px solid red"}}>
      
      <Flex  justifyContent="center" padding="20px" minWidth="300px">
        <TableContainer >
          <Table variant="striped" colorScheme="teal" border="1px solid black">
            <TableCaption><h2>Crypto Summary</h2></TableCaption>
            <Thead>
              <Tr>
                <Th>Symbol</Th>
                <Th>Crypto Name</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cryptodata?.length &&
                cryptodata.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.symbol}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.quote.USD.price.toFixed(2)}</Td>
                    <Td isNumeric></Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </div>
  );
};

export default Crypto;
