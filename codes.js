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
