// basic of js

// var a = 10;
// console.log(a);

// let name1 = "bakka";
// console.log("this person name is " + name1 + " becz he is " + name1);

// let name2 = "bakkas";
// let age = 21;
// let ismarried = false;
// if (ismarried == true) console.log(name2 + " is married");
// else console.log(name2 + "is not married");

// write the program to greet a person given their first and alast name
// let first_name = "Bakka";
// let second_name = "Singh";

// console.log("hello " + first_name + " " + second_name);

// write a program that greets a person based on their gender.
// let gender = "fale";
// if (gender == "Male") console.log("the person is male");
// else console.log("the person is female");

// print numbers from 1 to 10k
// let arr = [];
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
//   arr.push(i);
// }

// // print all the even numbers in an array
// for (let i = 0; i < arr.length; i = i + 2) {
//   console.log(i);
// }

// find the biggest element in an array
// let arr = [4, 10, 5, 8, 9];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }
// console.log("the max element is " + max);

// complex objects
// let complex_var = [
//   {
//     first_name: "bakka",
//     second_name: "bakka2",
//     info: {
//       age: 21,
//       address: "unknown",
//     },
//   },
//   {
//     first_name: "new",
//     second_name: "new2",
//   },
// ];

// console.log(complex_var[0].info.age);

// callbacks
// function sum(a, b, fun) {
//   fun(a + b);
// }

// function display(result) {
//   console.log("the result is " + result);
// }

// let a = 10;
// let b = 20;
// console.log(sum(a, b, display));

function print(i) {
  console.log(i);
}

function counterclock(n) {
  const invervalid = setInterval(() => {
    if (n >= 0) {
      print(n);
      n--;
    } else {
      clearInterval(invervalid);
    }
  }, 1000);
  return;
}
counterclock(10);
