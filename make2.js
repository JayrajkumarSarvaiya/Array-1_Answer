function make2(a, b){
  let len1 = a.length;
  let len2 = b.length;
  
  if(len1>=2)
  {
    const arr = [a[0],a[1]];
    return arr;
  }
  else if(len1==1)
  {
    const arr = [a[0],b[0]];
    return arr;
  }
  else if(len1==0)
  {
    const arr = [b[0], b[1]];
    return arr;
  }
}