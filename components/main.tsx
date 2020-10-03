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
  const [isOutOfRange, setIsOutOfRange] = useState(false);
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

  useEffect(() => {
    if (Math.abs(Number(input)) > Number.MAX_SAFE_INTEGER) {
      setIsOutOfRange(true);
    }
  }, [input]);

  return (
    <Flex style={conatiner}>
      <SimpleGrid columns={1} spacing={2}>
        <Box>
          <InputPad input={input} isOutOfRange={isOutOfRange} />
        </Box>
        <Box>
          <NumberPad
            setInput={setInput}
            input={input}
            height={height}
            isOutOfRange={isOutOfRange}
            setIsOutOfRange={setIsOutOfRange}
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
