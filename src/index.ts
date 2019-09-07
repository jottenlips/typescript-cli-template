#!/usr/bin/env node
import * as yargs from 'yargs';

const argv = yargs.options({
  hello: { type: 'string', default: 'Hello, no commands yet' },
}).argv;

interface Arguments {
  [x: string]: unknown;
  hello: string;
}

const main = () => console.log(sayHello(argv));
export const sayHello = (param: Arguments) => param.hello;
main();
