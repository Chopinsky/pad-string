/*
 * pad-string
 * https://github.com/Chopinsky/pad-string
 *
 * Copyright (c) 2017 Jacob Zuo
 * Licensed under the MIT license.
 */

exports.padStart = function (str, targetLength) {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str || str.length === 0) {
    return getPaddingFiller(strLength);
  }

  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length >= strLength) {
    return str;
  }

  return getPaddingFiller(strLength - target.length, fillerString) + target;
}

exports.padEnd = function (str, targetLength, fillerString) {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str) {
    return getPaddingFiller(strLength);
  }

  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length >= strLength) {
    return target;
  }

  return target + getPaddingFiller(strLength - target.length, fillerString);
}

exports.padBothEnds = function (str, targetLength, fillerString) {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str) {
    return getPaddingFiller(strLength);
  }
  
  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length > strLength) {
    return target;
  }

  var extraPads = strLength - target.length;
  var padFront = Math.ceil(extraPads / 2);
  var padTail = Math.floor(extraPads / 2);

  return getPaddingFiller(padFront, fillerString) + str + getPaddingFiller(padTail, fillerString);
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