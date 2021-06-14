function longestCommonPrefix(strs: string[]): string {
    let continueFor = true;
    let prefix = [];
    
    for (let i = 0; i < strs[0].length && continueFor; i++) {
        let similar = strs[0].split('')[i];
        let matches = strs.filter(s => similar == s.split('')[i])
        if(strs.length != matches.length) continueFor = false;
        else prefix.push(similar)
    }
    return prefix.join('')
};

function main(){
  let strs = ["flower","flow","flight"]
  console.log(longestCommonPrefix(strs))
  return longestCommonPrefix(strs)
}

main();