function sum2(nums){
  let len = nums.length;
  let sum = 0;
  if(len == 0)
  {
    return 0;
  }
  else if(len <=2)
  {
    for(let i=0; i<len; i++)
    {
      sum += nums[i]
    }
    return sum;
  }
  else
  {
    sum = nums[0] + nums[1];
    return sum;
  }
}