import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';
import NumberPad from './number-pad';

export default function Main() {
  return (
    <Flex width="100%" align="center" justify="center" height="100vh">
      <SimpleGrid columns={1} spacing={2}>
        <Box>input</Box>
        <Box>
          <NumberPad />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
