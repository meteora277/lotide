const head = function(arr) {

  if (Array.isArray(arr)) {

    return arr[0];

  } else {

    return undefined;

  }

};

module.exports = head;
