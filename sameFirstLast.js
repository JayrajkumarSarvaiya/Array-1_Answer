function sameFirstLast(nums){
  if(nums.length == 0)
    return false;
  else
  return nums[0] == nums[nums.length-1];
}