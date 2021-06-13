function twoSum(nums: number[], target: number): number[] {
    const numberPosition = [];
  for (let i = 0; i < nums.length; i++) {
      const complement = nums.findIndex((n, j) => n == target-nums[i] && i != j);
      if(complement > -1) numberPosition.push(i);
  }
  return numberPosition;
};

function main(){
  const numbers = [2, 7,11,15];
  const target = 9;
  
  console.log(twoSum(numbers, target));
  
  return twoSum(numbers, target);
}

main();