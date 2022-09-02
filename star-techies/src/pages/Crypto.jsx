import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Avatar,
  Th,
  Thead,
  Tr,
  Flex,
  Spinner
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
  const isLoading= useSelector((store)=>store.isLoading);

  console.log(cryptodata);


  if(isLoading)
  {
    return <Spinner size="xl" margin="100px"/>
  }

  return (
    <div style={{   height:"400px", overflowY:"scroll",overflowX:"hidden",margin:"auto",boxShadow:"2px 2px 5px rgba(0,0,0,0.2)"} }>
      
      <Flex  justifyContent="center" padding="20px" minWidth="300px">
        <TableContainer border="1px solid gray" size="lg">
          <Table variant="striped" colorScheme="facebook" boxShadow="2px 2px 10px rgba(0,0,0,0.2)"  size="md" width="50%">
            
            <Thead >
              <Tr >
                <Th textColor="orange.800" >Symbol</Th>
                <Th textColor="orange.800" >Code</Th>
                <Th textColor="orange.800">Crypto Name</Th>
                <Th textColor="orange.800">Price In $</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cryptodata?.length &&
                cryptodata.map((item) => (
                  <Tr key={item.id} fontSize="15px" fontWeight="semibold">
                    <Td><Avatar name={item.name}/></Td>
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
