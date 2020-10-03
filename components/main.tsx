import React, { useState, useEffect } from 'react';
import { Flex, Box, SimpleGrid } from '@chakra-ui/core';
import NumberPad from './number-pad';
import InputPad from './input-pad';

const conatiner = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

export default function Main() {
  const [input, setInput] = useState('0');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleSize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [width, height]);

  return (
    <Flex style={conatiner}>
      <SimpleGrid columns={1} spacing={2}>
        <Box>
          <InputPad input={input} />
        </Box>
        <Box>
          <NumberPad setInput={setInput} input={input} height={height} />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
