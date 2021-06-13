function isPalindrome(x: number): boolean {
    const negative =  x < 0 ? -1 : 1;
    if(negative == -1) return false;

    let reverse = Number(x.toString().split('').reverse().join(''))

    return x == reverse;
};

function main(){
  
}

main();