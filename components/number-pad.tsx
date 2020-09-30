import React, { useState, useEffect } from 'react';
import { Input, Flex, Box, PseudoBox, SimpleGrid } from '@chakra-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pad: {
      // width: '300px',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '400px',
    },
    box: {
      // width: '100px',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '100px',
    },
    number: {
      cursor: 'pointer',
      backgroundColor: 'rgb(51,51,51)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      color: 'white',
      fontSize: '36px',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: 'rgb(75,75,75)',
      },
      '&:active': {
        backgroundColor: 'rgb(115,115,115)',
      },
    },
    sign: {
      backgroundColor: 'rgb(166,166,166)',
      color: 'black',
      fontSize: '30px',
      '&:hover': {
        backgroundColor: 'rgb(190,190,190)',
      },
      '&:active': {
        backgroundColor: 'rgb(217,217,217)',
      },
    },
    symbol: {
      backgroundColor: 'rgb(242,162,60)',
      '&:hover': {
        backgroundColor: 'rgb(243,180,100)',
      },
      '&:active': {
        backgroundColor: 'rgb(244,200,149)',
      },
    },
  })
);

interface INumberPadProps {
  setInput: (input: number) => void;
  input: number;
}

export default function NumberPad(props: INumberPadProps) {
  const classes = useStyles();
  const keypad = [
    { value: 'AC', type: 'sign' },
    { value: '+/−', type: 'sign' },
    { value: '%', type: 'sign' },
    { value: '÷', type: 'symbol' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: 'X', type: 'symbol' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '−', type: 'symbol' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'symbol' },
    { value: '0', type: 'number' },
    { value: '00', type: 'number' },
    { value: '.', type: 'number' },
    { value: '=', type: 'symbol' },
  ];

  const handleNumberClick = (input: string) => {
    let newInput = '';
    switch (input) {
      case '0':
        newInput = props.input ? props.input.toString() + input : '0';
        break;
      case '00':
        newInput = props.input ? props.input.toString() + input : '0';
        break;
      default:
        newInput = props.input
          ? props.input.toString() + input
          : props.input.toString().substring(1) + input;
    }
    props.setInput(Number(newInput));
  };

  const handleSignClick = (input: string) => {
    switch (input) {
      case 'AC':
        props.setInput(0);
        break;
      case '+':
        if (props.input) {
          props.setInput(props.input * 0.01);
        }
        break;
      case '%':
        if (props.input) {
          props.setInput(props.input * 0.01);
        }
        break;
      default:
    }
  };

  return (
    <Flex className={classes.pad}>
      <SimpleGrid columns={4} spacing={2}>
        {keypad.map((key, index: number) => {
          const keyValue = key.value === 'AC' && props.input ? 'C' : key.value;
          return (
            <Flex className={classes.box} key={index}>
              <Flex
                onClick={() =>
                  key.type === 'number'
                    ? handleNumberClick(key.value)
                    : handleSignClick(key.value)
                }
                className={
                  key.type === 'number'
                    ? classes.number
                    : key.type === 'sign'
                    ? clsx(classes.number, classes.sign)
                    : clsx(classes.number, classes.symbol)
                }
              >
                {keyValue}
              </Flex>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
