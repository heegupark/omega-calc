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
    selectedSymbol: {
      backgroundColor: 'white',
      color: 'rgb(242,162,60)',
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
  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [symbolFlag, setSymbolFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  const classes = useStyles();
  const keypad = [
    { value: 'AC', type: 'sign' },
    { value: '+/−', type: 'sign' },
    { value: '%', type: 'sign' },
    { value: '÷', type: 'symbol' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '×', type: 'symbol' },
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

  const calc = (num1: number, num2: number, sign: string) => {
    console.log(num1, num2, sign);
    switch (sign) {
      case '+':
        return num1 + num2;
      case '−':
        return num1 - num2;
      case '÷':
        return num1 / num2;
      case '×':
        return num1 * num2;
      case '%':
        return props.input * 0.01;
      case '+/−':
        return props.input * -1;
    }
    return 0;
  };

  const handleNumberClick = (input: string) => {
    let newInput = '';
    const newCurrent = props.input;
    const prevInput = flag ? 0 : newCurrent;
    switch (input) {
      case '0':
        newInput = prevInput ? prevInput.toString() + input : '0';
        break;
      case '00':
        newInput = prevInput ? prevInput.toString() + input : '0';
        break;
      default:
        newInput = prevInput
          ? prevInput.toString() + input
          : prevInput.toString().substring(1) + input;
    }
    setFlag(false);
    setCurrent(Number(newInput));
    props.setInput(Number(newInput));
  };

  const initValue = () => {
    props.setInput(0);
    setPrev(0);
    setCurrent(0);
    setSymbol('');
    setFlag(false);
  };

  const handleSignClick = (input: string) => {
    switch (input) {
      case 'AC':
        initValue();
        break;
      case '%':
        props.setInput(calc(prev, current, input));
        break;
      case '+/−':
        props.setInput(calc(prev, current, input));
        break;
      case '=':
        const newInput1 = calc(prev, current, symbol);
        setPrev(newInput1);
        props.setInput(newInput1);
        setFlag(true);
        break;
      default:
        const newInput2 = calc(prev, current, symbol);
        setFlag(true);
        setSymbol(input);
        if (symbol === input) {
          if (symbolFlag) {
            setPrev(newInput2);
            props.setInput(newInput2);
            setSymbolFlag(false);
          } else {
            setPrev(props.input);
          }
        } else {
          setPrev(props.input);
          setSymbolFlag(true);
        }
    }
  };

  return (
    <Flex className={classes.pad}>
      <SimpleGrid columns={4} spacing={2}>
        {keypad.map((key, index: number) => {
          const keyValue = key.value === 'AC' && props.input ? 'C' : key.value;
          let classStr = null;
          switch (key.type) {
            case 'symbol':
              if (symbol === key.value) {
                classStr = clsx(classes.number, classes.selectedSymbol);
              } else {
                classStr = clsx(classes.number, classes.symbol);
              }
              break;
            case 'sign':
              classStr = clsx(classes.number, classes.sign);
              break;
            default:
              classStr = classes.number;
          }
          return (
            <Flex className={classes.box} key={index}>
              <Flex
                onClick={() =>
                  key.type === 'number'
                    ? handleNumberClick(key.value)
                    : handleSignClick(key.value)
                }
                className={classStr}
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
