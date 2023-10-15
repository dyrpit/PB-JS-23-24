// -------------------------toString-------------------------

// console.log(String(null));
// console.log(String(undefined));
// console.log(String(true));
// console.log(String(3.14));
// console.log(String(0));
// console.log(String(-0));

// console.log(String([]));
// console.log(String([1, 2, 3]));
// console.log(String([null, undefined]));
// console.log(String([[[], [], []], []]));
// console.log(String([, , , ,]));

// console.log(String({}));

// -------------------------toNumber-------------------------

// console.log(Number(""));
// console.log(Number("0"));
// console.log(Number("-0"));
// console.log(Number("  009  "));
// console.log(Number("3.14"));
// console.log(Number("0."));
// console.log(Number(".0"));
// console.log(Number("."));

// console.log(Number(false));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number(undefined));

// console.log(Number([]));
// console.log(Number(["0"]));
// console.log(Number(["-0"]));
// console.log(Number([null]));
// console.log(Number([undefined]));
// console.log(Number([1, 2, 3]));
// console.log(Number([[[]]]));

// console.log(Number({}));

// -------------------------operators-------------------------

// console.log(1 == 1);
// console.log(1 == true);
// console.log(0 == false);
// console.log(1 === true);
// console.log(1 != true);
// console.log(1 !== true);

// let v1 = 4;
// let v2 = 10;
// let v3 = 3;
// let v4 = false;
// let v5 = 0;

// console.log(v1 > 5);
// console.log(v1 > 5 && v2 < 100);
// console.log(v1 > 5 || v2 < 100);
// console.log(v1 > 5 || (v2 < 100 && v3 === 3));
// console.log((v1 > 5 || v2 < 100) && v3 === 3);
// console.log(!v1);
// console.log(!!v1);
// console.log(!v5);
// console.log(!!v5);
// console.log(v1 && v2);
// console.log(v1 || v2);
// console.log(v4 && v5);
// console.log(v4 || v5);
// console.log(0 && "");
// console.log(0 || "");
// console.log(4 && {});
// console.log(4 || {});

// let userName = null;
// let defaultName = "Anonymous user";
// console.log(userName || defaultName);

// -------------------------continue/brake-------------------------

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("continue on 2 - for loop");
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// console.log("break on 2 - for loop");
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

// console.log("continue on 2 - while loop");

// let i = 0;
// while (i < 5) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// console.log("done");
