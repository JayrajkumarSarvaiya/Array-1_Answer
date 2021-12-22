function maxEnd3(nums){
  let len = nums.length;
  
  if(nums[0] >= nums[len-1])
  {
    nums[0] = nums[0];
    nums[1] = nums[0];
    nums[2] = nums[0];
  }
  else if(nums[0] <= nums[len-1])
  {
    nums[0] = nums[len-1];
    nums[1] = nums[len-1];
    nums[2] = nums[len-1];
  }
  else
  {
    nums[0] = nums[1];
    nums[1] = nums[1];
    nums[2] = nums[1];
  }
  const arr = [nums[0],nums[1],nums[2]];
  return arr;
}