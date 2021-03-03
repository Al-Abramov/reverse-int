module.exports = function reverse (n) {
        let res = Math.abs(n).toString().split('').reverse().join('');
        return Number(res);
  }
