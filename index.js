exports.padStart = (str, targetLength) => {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str || str.length === 0) {
    return ' '.repeat(strLength);
  }

  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length >= strLength) {
    return str;
  }

  return ' '.repeat(strLength - target.length) + target;
}

exports.padEnd = (str, targetLength) => {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str) {
    return ' '.repeat(strLength);
  }

  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length >= strLength) {
    return target;
  }

  return target + ' '.repeat(strLength - target.length);
}

exports.padBothEnds = (str, targetLength) => {
  var strLength = ~~targetLength;
  if (isNaN(strLength) || strLength === 0) {
    return str;
  }

  if (!str) {
    return ' '.repeat(strLength);
  }
  
  var target = (typeof str === 'string') ? str : str.toString();

  if (target.length > strLength) {
    return target;
  }

  var extraPads = strLength - target.length;
  var padFront = Math.ceil(extraPads/2);
  var padTail = Math.floor(extraPads/2);

  return ' '.repeat(padFront) + str + ' '.repeat(padTail);
}