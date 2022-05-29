const main = (arg) => {
  const input = arg.trim().split("\n");
  const n = parseInt(input[0].split(" ")[0]);
  for (let i = 1;i <= n;i++) {
    let a = parseInt(input[i].split(" ")[0]);
    let b = parseInt(input[i].split(" ")[1]);
    let c = parseInt(input[i].split(" ")[2]);
    console.log(a, b, c);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
