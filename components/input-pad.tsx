import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';

interface IInputPadProps {
  input: number;
}

export default function InputPad(props: IInputPadProps) {
  let fontSize = '';
  switch (true) {
    case props.input.toString().length > 20:
      fontSize = '18px';
      break;
    case props.input.toString().length > 15:
      fontSize = '21px';
      break;
    case props.input.toString().length > 10:
      fontSize = '31px';
      break;
    default:
      fontSize = '42px';
  }
  return (
    <Flex
      width="300px"
      align="center"
      height="60px"
      justify="row-end"
      color="white"
      overflow="scroll"
    >
      <SimpleGrid
        columns={1}
        spacing={1}
        width="100%"
        p={2}
        fontSize={fontSize}
      >
        <Box textAlign="right">{props.input.toLocaleString()}</Box>
      </SimpleGrid>
    </Flex>
  );
}
