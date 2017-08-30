# Pad String
This project creates a NPM module to help faciliting addition of string paddings to extend a string to a certain length.

## Install
```
npm install pad-string --save
```
Then in your code, import the function you would like to use:
```
import { padStart, padEnd, padBothEnds } from 'pad-string'
var str1 = padStart('test', 10)         // str1 = '      test'
var str2 = padEnd('test', 10, 'er')     // str2 = 'testererer'
var str3 = padBothEnds('test', 10, 'a') // str3 = 'aaatestaaa'
```


## How to use it
The package provides 3 functions: `padStart(targetString, targetLength[, fillerString])`, `padEnd(targetString, targetLength[, fillerString])`, and `padBothEnds(targetString, targetLength[, fillerString])`.

- targetString: input string to add padding to.
- targetLength: the final length the string will be padded to. If this length is smaller or equal to the target string length, then we will return the target string.
- fillerString (optional): the string to fill the padding. If provided, the filler string will repeat itself until padding the target string to the target length; if not provided, the padding will be filled with white space. 

## PR Welcome
Please feel free to submit PR. Let's make the string padding great again!
