// before numeric separators, big numbers were difficult to read

const budget = 1000000000; // how many zeros are there?
 
// numeric separator _ fixes the readibility issue

const budget = 1_000_000_000;

// numeric separators can be used for integers, floating point numbers, bigint, bnary, octal and hexadecimal numbers

let amount = 120_201_123.05; // 120201123.05

let expense = 123_450; // 123450

let fee = 12345_00; // 1234500

let amount = 0.000_001; // 1 millionth

const max = 9_223_372_036_854_775_807n; // BigInt

let nibbles = 0b1011_0101_0101; // binary

let val = 0o1234_5670; // octal

let message = 0xD0_E0_F0; // hex
