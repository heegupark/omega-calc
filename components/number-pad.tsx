import React, { useState, useEffect, Key } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberSizeSm: {
      width: '55px',
      height: '55px',
    },
    numberSizeMd: {
      width: '65px',
      height: '65px',
    },
    number: {
      cursor: 'pointer',
      backgroundColor: 'rgb(51,51,51)',
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
  setInput: (input: string) => void;
  input: string;
  height: number;
  isOutOfRange: boolean;
  setIsOutOfRange: (isOutOfRange: boolean) => void;
}

export default function NumberPad(props: INumberPadProps) {
  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [symbolFlag, setSymbolFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const classes = useStyles();
  const keypad = [
    { display: 'AC', type: 'sign', value: 'AC' },
    { display: '+/−', type: 'sign', value: '+/−' },
    { display: '%', type: 'sign', value: '%' },
    { display: '÷', type: 'symbol', value: '/' },
    { display: '7', type: 'number', value: '7' },
    { display: '8', type: 'number', value: '8' },
    { display: '9', type: 'number', value: '9' },
    { display: '×', type: 'symbol', value: '*' },
    { display: '4', type: 'number', value: '4' },
    { display: '5', type: 'number', value: '5' },
    { display: '6', type: 'number', value: '6' },
    { display: '−', type: 'symbol', value: '-' },
    { display: '1', type: 'number', value: '1' },
    { display: '2', type: 'number', value: '2' },
    { display: '3', type: 'number', value: '3' },
    { display: '+', type: 'symbol', value: '+' },
    { display: '0', type: 'number', value: '0' },
    { display: '00', type: 'number', value: '00' },
    { display: '.', type: 'number', value: '.' },
    { display: '=', type: 'symbol', value: '=' },
  ];
  const keypadLandscape = [
    { display: 'AC', type: 'sign', value: 'AC' },
    { display: '7', type: 'number', value: '7' },
    { display: '8', type: 'number', value: '8' },
    { display: '9', type: 'number', value: '9' },
    { display: '÷', type: 'symbol', value: '/' },
    { display: '+/−', type: 'sign', value: '+/−' },
    { display: '4', type: 'number', value: '4' },
    { display: '5', type: 'number', value: '5' },
    { display: '6', type: 'number', value: '6' },
    { display: '×', type: 'symbol', value: '*' },
    { display: '%', type: 'sign', value: '%' },
    { display: '1', type: 'number', value: '1' },
    { display: '2', type: 'number', value: '2' },
    { display: '3', type: 'number', value: '3' },
    { display: '−', type: 'symbol', value: '-' },
    { display: '=', type: 'symbol', value: '=' },
    { display: '.', type: 'number', value: '.' },
    { display: '0', type: 'number', value: '0' },
    { display: '00', type: 'number', value: '00' },
    { display: '+', type: 'symbol', value: '+' },
  ];

  const calc = (num1: number, num2: number, sign: string) => {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '÷':
        return num1 / num2;
      case '/':
        return num1 / num2;
      case '×':
        return num1 * num2;
      case '*':
        return num1 * num2;
      case '%':
        return Number(props.input) * 0.01;
      case '+/−':
        return Number(props.input) * -1;
      default:
        return num2;
    }
  };

  const downHandler = ({ key }: { key: Key }) => {
    if (
      key === '0' ||
      key === '1' ||
      key === '2' ||
      key === '3' ||
      key === '4' ||
      key === '5' ||
      key === '6' ||
      key === '7' ||
      key === '8' ||
      key === '.' ||
      key === '9'
    ) {
      handleNumberClick(key.toString());
    } else if (
      key === '-' ||
      key === '+' ||
      key === '/' ||
      key === '*' ||
      key === '.' ||
      key === '%'
    ) {
      handleSignClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleSignClick('=');
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keyup', downHandler);
    };
  });

  useEffect(() => {
    if (props.input !== '0') {
      setIsStarted(true);
    }
  }, [props.input]);

  const handleInput = (inputStr: string) => {
    props.setInput(inputStr);
  };

  const handleNumberClick = (input: string) => {
    if (!props.isOutOfRange) {
      let newInput = '';
      const newCurrent = props.input;
      const prevInput = flag ? '0' : newCurrent;
      switch (input) {
        case '0':
          newInput = prevInput !== '0' ? prevInput.toString() + input : '0';
          break;
        case '00':
          newInput = prevInput !== '0' ? prevInput.toString() + input : '0';
          break;
        case '.':
          if (!props.input.toString().includes('.')) {
            newInput = `${props.input}.`;
          } else {
            return;
          }
          break;
        default:
          newInput =
            Number(prevInput) !== 0
              ? prevInput.toString() + input
              : prevInput.toString().substring(1) + input;
      }
      setFlag(false);
      setCurrent(Number(newInput));
      handleInput(newInput);
    }
  };

  const initValue = () => {
    handleInput('0');
    setPrev(0);
    setCurrent(0);
    setSymbol('');
    setFlag(false);
    setIsStarted(false);
    props.setIsOutOfRange(false);
  };

  const handleSignClick = (input: string) => {
    switch (input) {
      case 'AC':
        initValue();
        break;
      case '%':
        if (!props.isOutOfRange)
          handleInput(calc(prev, current, input).toString());
        break;
      case '+/−':
        if (!props.isOutOfRange)
          handleInput(calc(prev, current, input).toString());
        break;
      case '=':
        if (!props.isOutOfRange) {
          const newInput1 = calc(prev, current, symbol);
          setPrev(newInput1);
          handleInput(newInput1.toString());
          // setSymbol(input);
          setFlag(true);
        }
        break;
      default:
        if (!props.isOutOfRange) {
          const newInput2 = calc(prev, current, symbol);
          setFlag(true);
          setSymbol(input);
          if (symbol === input) {
            if (symbolFlag) {
              setPrev(newInput2);
              handleInput(newInput2.toString());
              setSymbolFlag(false);
            } else {
              setPrev(Number(props.input));
            }
          } else {
            setPrev(Number(props.input));
            setSymbolFlag(true);
          }
        }
    }
  };

  const isLandscape = props.height <= 414;
  const isSmall = props.height <= 320;
  const pad = isLandscape ? keypadLandscape : keypad;
  return (
    <Flex className={classes.box}>
      <SimpleGrid columns={isLandscape ? 5 : 4} spacing={isSmall ? 1 : 2}>
        {pad.map((key, index: number) => {
          const keyValue =
            key.display === 'AC' && isStarted ? 'C' : key.display;
          let classStr = null;
          switch (key.type) {
            case 'symbol':
              if (symbol === key.value) {
                classStr = clsx(
                  isSmall ? classes.numberSizeSm : classes.numberSizeMd,
                  classes.number,
                  classes.selectedSymbol
                );
              } else {
                classStr = clsx(
                  isSmall ? classes.numberSizeSm : classes.numberSizeMd,
                  classes.number,
                  classes.symbol
                );
              }
              break;
            case 'sign':
              classStr = clsx(
                isSmall ? classes.numberSizeSm : classes.numberSizeMd,
                classes.number,
                classes.sign
              );
              break;
            default:
              classStr = clsx(
                isSmall ? classes.numberSizeSm : classes.numberSizeMd,
                classes.number
              );
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
