module.exports = function reverse (n) {
  if(n < 0){
      let res = n.toString().split("").reverse().join("").slice(0,-1);
      return Number(res);
  }else{
      let res = n.toString().split('').reverse().join('');
      return Number(res);
  }
  }
