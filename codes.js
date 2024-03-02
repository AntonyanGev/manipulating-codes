
//221-225 solutions in one function
function countAndPrint(num) {
  if (typeof num !== "number") {
    console.log(" Dear user please input a number");
    return;
  }
  let res = num.toString();
  let result = res.split("");
  let count = 0;
  let sum = 0;
  let multiply = 1;
  let reversed = [];
  let normal = [];
  for (let i = 0; i < result.length; i++) {
    count++;
    sum = sum + Number(result[i]);
    multiply *= Number(result[i]);
    normal.push(result[i]);
    reversed.push(result.at(-1 - i));
  }

  normal = normal.toString();
  reversed = reversed.toString();
  console.log(normal);
  console.log(reversed);

  return {
    numOfElements: count,
    sum: sum,
    multiply: multiply,
  };
}
///second solution

function countAndPrint(num) {
  if (typeof num !== "number") {
    console.log(" Dear user please input a number");
    return;
  }
  let res = num.toString();
  let result = res.split("");
  let count = 0;
  let sum = 0;
  let multiply = 1;
  let reversed = [];
  let normal = [];
  for (let i = 0; i < result.length; i++) {
      if(!isNaN(result[i])){
    count++;
    sum = sum + parseInt(result[i]);
    multiply *= parseInt(result[i]);
    normal.push(result[i]);
    reversed.push(result.at(-1 - i));
  }
  }

  normal = normal.toString();
  reversed = reversed.toString();
  console.log(normal);
  console.log(reversed);

  return {
    numOfElements: count,
    sum: sum,
    multiply: multiply,
  };
}





///3-d solution is the most optimal 
function countAndPrint(num) {
  if (typeof num !== "number") {
    console.log(" Dear user please input a number");
    return;
  }
    let integer=Math.floor(num)
  let res =integer.toString();
  let result = res.split("");
  let count = 0;
  let sum = 0;
  let multiply = 1;
  let reversed = [];
  let normal = [];
  for (let i = 0; i < result.length; i++) {
      if(!isNaN(result[i])){
    count++;
    sum = sum + parseInt(result[i]);
    multiply *= parseInt(result[i]);
    normal.push(result[i]);
    reversed.push(result.at(-1 - i));
  }
  }

  normal = normal.toString();
  reversed = reversed.toString();
  console.log(normal);
  console.log(reversed);

  return {
    numOfElements: count,
    sum: sum,
    multiply: multiply,
  };
}


///226
function foo1(num) {
  if (typeof num !== "number") {
    console.log("wrong");
    return;
  }
  num = num.toString();
  let reversed = "";
  for (let i = num.length - 1; i >= 0; i--) {
    reversed += num[i];
  }
  return +reversed;
}

///227
function check(num) {
  if (typeof num !== "number") {
    return "please input a number";
  }
  num = num.toString();
  if (num.includes(2)) {
    return true;
  } else {
    return false;
  }
}


//228

function check(num) {
  if (typeof num !== "number") {
    return "Please input a number";
  }
  const toStr= num.toString();

  for (let i = 0; i < toStr.length - 1; i++) {
    if (toStr[i] === toStr[i + 1]) {
      return "is equal";
    }
  }
 return "is not equal";
}

//229

function foo1(num) {
  if (typeof num !== "number") {
    return "please input a number";
  }

  let result = num.toString();
  result = result.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] % 2 !== 0) {
      return true;
    }
  }
  return false;
}

//230


function callBack(odd, even) {
  let arr = odd.reduce((sum, item) => {
    return (sum += item);
  }, 0);

  let arr2 = even.reduce((sum, item) => {
    return (sum += item);
  }, 0);

  let result = arr.toString();
  let result1 = arr2.toString();
  if (result == result1) {
    return true;
  }
  return false;
}



function checkEquality(num) {
  if (typeof num !== "number") {
    return "please input a number";
  }

  let result = num.toString();
  result = result.split("");
  let odd = [];
  let even = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] % 2 !== 0) {
      odd.push(Number(result[i]));
    } else {
      even.push(Number(result[i]));
    }
  }
  return callBack(odd, even);
}

