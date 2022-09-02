import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const RealTimeIndex = () => {

    const [myIndex, setMyIndex] = useState({
            sensex : 58504.37,
            percent_sensex : -0.37,
            value_sensex : -2.20,
            nifty : 17578.28,
            percent_nifty : 7.63,
            value_nifty : 43.26,
            sensex_color : "red",
            nifty_color : "green"
    })
    console.log(myIndex)

    let sensex_color;
    let nifty_color;

    const setIndex=()=>{
        const sensex = (Math.floor(Math.random() * (59000.75 - 58000.37 + 0.01) ) + 58000.37).toFixed(2)
        const percent_sensex = (Math.floor(Math.random() * (15.75 - (-15.37) + 0.01) ) + (-15.37)).toFixed(2)
        const value_sensex = (5.67 * percent_sensex).toFixed(2)
        const nifty = (Math.floor(Math.random() * (17600.75 - 17500.37 + 0.01) ) + 17500.37).toFixed(2)
        const percent_nifty = (Math.floor(Math.random() * (15.75 - (-12.37) + 0.01) ) + (-12.37)).toFixed(2)
        const value_nifty = (5.67 * percent_nifty).toFixed(2)

        if(percent_sensex<0){
            sensex_color = "red"
        }
        else{
            sensex_color = "green"
        }
        if(percent_nifty<0){
            nifty_color = "red"
        }
        else{
            nifty_color = "green"
        }

        const obj = {
            sensex : sensex,
            percent_sensex : percent_sensex,
            value_sensex : value_sensex,
            nifty : nifty,
            percent_nifty : percent_nifty,
            value_nifty : value_nifty,
            sensex_color : sensex_color,
            nifty_color : nifty_color
        }
        setMyIndex(obj);
        return myIndex
    }

    setInterval(function () {setIndex()}, 5000)


  return (
    <HStack gap="3%" width="30%" >
        <VStack>
            <Box><Text fontSize='2xl'>Sensex</Text></Box>
            <HStack><Text fontSize='xl'>{myIndex.sensex}</Text> <Text color={myIndex.sensex_color} >{myIndex.value_sensex}</Text><Text color={myIndex.sensex_color} >{myIndex.percent_sensex} %</Text></HStack>
        </VStack>
        <VStack>
            <Box><Text fontSize='2xl'>Nifty</Text></Box>
            <HStack><Text fontSize='xl'>{myIndex.nifty}</Text> <Text color={myIndex.nifty_color} >{myIndex.value_nifty}</Text><Text color={myIndex.nifty_color} >{myIndex.percent_nifty} %</Text></HStack>
        </VStack>
    </HStack>
  )
}

export default RealTimeIndex