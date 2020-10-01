import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';

interface IInputPadProps {
  input: number;
}

export default function InputPad(props: IInputPadProps) {
  let fontSize =
    props.input.toString().length > 11
      ? `${42 - props.input.toString().length}px`
      : '42px';
  return (
    <Flex
      width="300px"
      align="center"
      height="60px"
      // justify="row-end"
      color="white"
      overflow="hidden"
    >
      <SimpleGrid
        columns={1}
        spacing={1}
        width="100%"
        p={2}
        fontSize={fontSize}
      >
        <Box textAlign="right">
          {props.input > 999 ? props.input.toLocaleString() : props.input}
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
