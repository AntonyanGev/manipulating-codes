
//exercises N-221-225 solutions in one function
function countAndPrint(num) {
  if (typeof num !== "number") {
    console.log(" Dear user please input a number");
    return;
  }
   if(num % 1 >= 0.5){
         num= Math.abs(Math.round(num))
     } else{
         num=Math.abs(Math.floor(num))
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
countAndPrint(456)

/// exercise N-226
function reverse (num) {
  if (typeof num !== "number") {
    console.log("dear user please input a number ");
    return;
  }
   if(num % 1 >= 0.5){
         num= Math.abs(Math.round(num))
     } else{
         num=Math.abs(Math.floor(num))
     }
  num = num.toString();
  let reversed = "";
  for (let i = num.length - 1; i >= 0; i--) {
    reversed += num[i];
  }
  return +reversed;
}

reverse (789)

/// exercise N-227
function check(num) {
  if (typeof num !== "number") {
    return "please input a number";
  }

  if (num % 1 >= 0.5) {
    num = Math.abs(Math.round(num));
  } else {
    num = Math.abs(Math.floor(num));
  }

  num = num.toString();
  if (num.includes(2)) {
    return true;
  } else {
    return false;
  }
}

check(426)

/// exercise N-228

function checkNumsEquality (num) {
  if (typeof num !== "number") {
    return "Please input a number";
  }
  if (num % 1 >= 0.5) {
    num = Math.round(num);
  } else {
    num = Math.floor(num);
  }
  const toStr = num.toString();
  for (let i = 0; i < toStr.length - 1; i++) {
    if (toStr[i] === toStr[i + 1]) {
      return "is equal";
    }
  }
  return "is not equal";
}
checkNumsEquality (444)

/// exercise N-229

function oddNums(num) {
  if (typeof num !== "number") {
    return "please input a number";
  }

 if (num % 1 >= 0.5) {
    num = Math.abs(Math.round(num));
  } else {
    num = Math.abs(Math.floor(num));
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
oddNums(215)

/// exercise N-230


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

   if (num % 1 >= 0.5) {
    num = Math.abs(Math.round(num));
  } else {
    num = Math.abs(Math.floor(num));
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

checkEquality(1245)

/// exercise N-281
/// first solution 
let arr=[]
let arr2=[]

function first(arr, arr2, num) {
  if (isNaN(num)) {
    return `please input number`;
  }
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 100)); 
    arr2.push(Math.floor(Math.random() * 100));
  }

  if (arr.length !== num && arr2.length !== num) {
    return `arrays have a different length`;
  }
  let length = arr.length;
  let sum1 = arr.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  result = sum1 / length;
  let sum2 = arr2.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  result2 = sum2 / length;

  return result * result2;
}

foo7(arr, arr2, 5)


//////second solution 
let arr = [4, 8, 9, 7, 45];
let arr2 = [5, 9, 8, 7, 12];

function second(arr, arr2, num) {
  if (isNaN(num)) {
    return `please input number`;
  }

  if (arr.length !== num && arr2.length !== num) {
    return `arrays have a different length`;
  }
  let length = arr.length;
  let sum1 = arr.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  result = sum1 / length;
  let sum2 = arr2.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  result2 = sum2 / length;

  return result * result2;
}

second(arr,arr2,5)


