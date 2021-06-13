function reverse(x: number): number {
  const limit = 2147483648;
  const factor = x < 0 ? -1 : 1;
  if(factor < 0 ? x < limit*factor : x > limit-1) return 0
  x = factor < 0 ? -x : x
  x = Number(x.toString().split('').reverse().join(''));
  x = factor < 0 ? x*factor : x
  if(factor < 0 ? x < limit*factor : x > limit-1) return 0
  
  return x;
};

function main(){
  let num = -2147483648;
  console.log(reverse(num));
  
  return reverse(num)
}

main();