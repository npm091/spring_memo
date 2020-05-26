const fs = require("fs");
const readline = require("readline");

// Streamを準備
const stream = fs.createReadStream("2020.txt", {
  encoding: "utf8", // 文字コード
  highWaterMark: 1024 // 一度に取得するbyte数
});

// readlineにStreamを渡す
const reader = readline.createInterface({ input: stream });

let i = 1;
reader.on("line", (data) => {
  let num = i.toString().padStart(5, "0");
  i++;
  let yyyy = ((data.toString()).match(/^([0-9]+)/g))[0];
  let mm = ((data.toString()).match(/年([0-9]+)/g))[0].replace(/^年/, "");
  mm = ("0" + mm).slice(-2);
  let dd = ((data.toString()).match(/月([0-9]+)/g))[0].replace(/^月/, "");
  dd = ("0" + dd).slice(-2);
  let note = ((data.toString()).match(/日(.+)/g))[0].replace(/^日/, "");
  console.log(`${num}: ${data}`);
  console.log("values ('" + yyyy + mm + dd + "', '" + note + "', '');");
  // console.log(mm);
  // console.log(dd);
  // console.log(note);
});