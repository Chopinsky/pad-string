/*
 * pad-string
 * https://github.com/Chopinsky/pad-string
 *
 * Copyright (c) 2017 Jacob Zuo
 * Licensed under the MIT license.
 */

exports.padStart = function (str, len, filler) {
  return paddingHelper(str, len, filler, 'start');
}

exports.padEnd = function (str, len, filler) {
  return paddingHelper(str, len, filler, 'end');
}

exports.padBothEnds = function (str, len, filler) {
  return paddingHelper(str, len, filler, 'both');
}

var paddingHelper = function (str, len, filler, loc) {
  var strLength = ~~len;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (str === null || str === undefined || str.length === 0) {
    return getPaddingFiller(strLength);
  }
  
  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length > strLength) {
    return target;
  }

  var result, fullFiller = getPaddingFiller(strLength - target.length, filler);

  switch (loc) {
    case 'end':
      result = target + fullFiller;
      break;
    case 'both':
      var extraPads = strLength - target.length;
      var padFront = Math.ceil(extraPads / 2);
      var padTail = Math.floor(extraPads / 2);
      result = getPaddingFiller(padFront, filler) + str + getPaddingFiller(padTail, filler);
      break;
    case 'start':
    default:
      return fullFiller + target;
      break;
  }

  return result; 
}

var getPaddingFiller = function (len, filler) {
  if (!len) {
    return '';
  }

  if (!filler) {
    return ' '.repeat(len);
  }

  var repeat = Math.floor(filler.length / strLen);
  var remainder = filler.length % strLen;

  return filler.repeat(repeat) + filler.substring(0, remainder);
}
