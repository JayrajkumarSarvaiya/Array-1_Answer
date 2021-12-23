function maxTriple(nums){
  let len = nums.length;
  let result = 0;
  
  let first = nums[0];
  let middle = nums[Math.floor(len/2)];
  let last = nums[len-1];
  
  if((first>middle)&&(first>last))
  {
    return nums[0];
  }
  else if((first<middle)&&(middle>last))
  {
    return nums[Math.floor(len/2)];
  }
  else
  {
    return nums[len-1];
  }
  //return result;
}