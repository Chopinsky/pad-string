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

  return getPaddingFiller(strLength - target.length) + target;
}

exports.padEnd = function (str, targetLength) {
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

  return target + getPaddingFiller(strLength - target.length);
}

exports.padBothEnds = function (str, targetLength) {
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

  return getPaddingFiller(padFront) + str + getPaddingFiller(padTail);
}

var getPaddingFiller = function (len, padStr) {
  if (!len) {
    return '';
  }

  if (!padStr) {
    return ' '.repeat(len);
  }

  var repeat = Math.floor(padStr.length / strLen);
  var remainder = padStr.length % strLen;

  return padStr.repeat(repeat) + padStr.substring(0, remainder);
}