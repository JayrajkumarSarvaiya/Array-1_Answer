function makeMiddle(nums){
  let len = nums.length;
  let newLen = len/2;
  const arr = [nums[newLen-1],nums[newLen]];
  return arr;
}