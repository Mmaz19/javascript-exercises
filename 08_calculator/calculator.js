const add = function(num, num2) {
	return num + num2;
};

const subtract = function(sub, sub1) {
	return sub - sub1;
};

const sum = function(array) {
  let tot = 0;
	for (i= 0; i< array.length; i++){
    tot += array[i];
  }
  return tot;
};

const multiply = function(arrMul) {
  let mul = 1;
	for (i= 0; i< arrMul.length; i++){
    mul *= arrMul[i];
  }
  return mul;
};

const power = function(bs, ex) {
	 return Math.pow(bs,ex);
};

const factorial = function(fact) {
	if (fact === 0){
    return 1;
  }else {
    let facTot = 1;
    for (i = 1; i<= fact; i++){
      facTot *= i
    }
    return facTot;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
