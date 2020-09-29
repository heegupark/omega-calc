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
    },
    sign: {
      backgroundColor: 'rgb(166,166,166)',
      color: 'black',
      fontSize: '30px',
    },
    symbol: {
      backgroundColor: 'rgb(242,162,60)',
    },
  })
);
export default function NumberPad() {
  const classes = useStyles();

  return (
    <Flex className={classes.pad}>
      <SimpleGrid columns={4} spacing={3}>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.sign)}>AC</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.sign)}>{'+/−'}</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.sign)}>%</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.symbol)}>÷</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>7</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>8</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>9</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.symbol)}>X</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>4</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>5</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>6</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.symbol)}>−</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>1</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>2</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>3</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.symbol)}>+</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>0</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>00</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={classes.number}>.</Flex>
        </Flex>
        <Flex className={classes.box}>
          <Flex className={clsx(classes.number, classes.symbol)}>=</Flex>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
