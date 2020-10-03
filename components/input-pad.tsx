import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';

interface IInputPadProps {
  input: string;
}

export default function InputPad(props: IInputPadProps) {
  const [fontSize, setFontSize] = useState('42px');

  useEffect(() => {
    setFontSize(
      Number(props.input).toString().length > 11
        ? `${42 - props.input.toString().length}px`
        : '42px'
    );
  }, [props.input]);

  const formatInput = (inputStr: string) => {
    const hasE = Number(inputStr).toString().includes('e');
    const hasDot = inputStr.includes('.');
    let result = '';

    if (hasDot) {
      result =
        Number(inputStr.split('.')[0]).toLocaleString() +
        '.' +
        inputStr.split('.')[1];
    } else {
      result = hasE
        ? Number(inputStr).toString()
        : Number(inputStr).toLocaleString();
    }

    return result;
  };

  return (
    <Flex
      // width="300px"
      align="center"
      height="60px"
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
        <Box textAlign="right">{formatInput(props.input)}</Box>
      </SimpleGrid>
    </Flex>
  );
}
