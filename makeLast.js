function makeLast(nums){
  let len = nums.length;
  const arr = [];
  let len2 = arr.length = len*2;
  
  for(let i=0; i<len2-1; i++)
  {
    arr[i] =0;
  }
  arr[arr.length-1] = nums[len-1];
  return arr;
  
  
}