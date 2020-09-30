import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';
import NumberPad from './number-pad';
import InputPad from './input-pad';

export default function Main() {
  const [input, setInput] = useState(0);

  return (
    <Flex width="100%" align="center" justify="center" height="100vh">
      <SimpleGrid columns={1} spacing={2}>
        <Box>
          <InputPad input={input} />
        </Box>
        <Box>
          <NumberPad setInput={setInput} input={input} />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
