function midThree(nums){
  let len = nums.length;
  let newLen = Math.floor(len/2);
  const arr = [nums[newLen-1],nums[newLen],nums[newLen+1]]
  return arr;
}