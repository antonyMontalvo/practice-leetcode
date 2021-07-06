function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let existNegative = A.findIndex((a) => a < 0) > -1 ? true : false;
  let resp = null;
  if (!existNegative) {
    let continueS = true;
    let i;
    for (i = 0; i < A.length && continueS; i++) {
      if (A.findIndex((a) => a == i + 1) == -1) {
        resp = i + 1;
        continueS = false;
      }
    }

    if (!resp) resp = i + 1;
  } else resp = 1;
  return resp;
}

function main() {
  console.log(solution([1, 3, 2]));
}

main();