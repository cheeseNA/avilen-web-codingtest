const main = (arg) => {
  const input = arg.trim().split("\n");
  const n = parseInt(input[0].split(" ")[0]);
  const N = parseInt(input[0].split(" ")[1]);
  const a = [];
  for (const num of input[1].split(" ")) {
    a.push(parseInt(num));
  }
  
  console.log(n);
  console.log(N);
  console.log(a);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
