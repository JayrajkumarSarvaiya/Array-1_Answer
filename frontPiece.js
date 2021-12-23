function frontPiece(nums){
  let len = nums.length;
  if(len<2)
  {
    return nums;
  }
  else
  {
    const arr = [nums[0],nums[1]];
    return arr;
  }
}