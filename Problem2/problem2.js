const main = (arg) => {
  const input = arg.trim().split("\n");
  const n = parseInt(input[0].split(" ")[0]);
  for (let i = 1; i <= n; i++) {
    const oa = parseInt(input[i].split(" ")[0]);
    const ob = parseInt(input[i].split(" ")[1]);
    const oc = parseInt(input[i].split(" ")[2]);
    
    let ans = Infinity;

    // decrease a and c to maximize b
    let a = oa;
    let b = ob;
    let c = oc;
    let maxB = 0;
    if(a >= b){
      maxB += a - b + 1;
      a = b - 1;
    }
    if(c >= b){
      maxB += c - b + 1;
      c = b - 1;
    }
    if(a === c){
      a -= 1;
      maxB += 1;
    }
    if(a >= 1 && c >= 1){
      ans = maxB;
    }

    // decrease b to minimize b
    a = oa;
    b = ob;
    c = oc;
    let minB = 0;
    if(b >= a){
      minB += b - a + 1;
      b = a - 1;
    }
    if(b >= c){
      minB += b - c + 1;
      b = c - 1;
    }
    if(a === c){
      if(a - 1 === b){
        a -= 1;
        b -= 1;
        minB += 2;
      }else{
        a -= 1;
        minB += 1;
      }
    }
    if(b >= 1){
      if(ans > minB){
        ans = minB;
      }
    }

    if(ans === Infinity){
      ans = -1;
    }
    console.log(ans);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
