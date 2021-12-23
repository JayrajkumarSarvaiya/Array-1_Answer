function front11(a, b){
  let len1 = a.length;
  let len2 = b.length;
  
  if((len1>=1) && (len2>=1))
  {
    const arr = [a[0], b[0]];
    return arr;
  }
  else if((len1==0) && (len2==0))
  {
    const arr = [];
    return arr;
  }
  else if(len1==0)
  {
    const arr = [b[0]];
    return arr;
  }
  else if(len2==0)
  {
    const arr = [a[0]];
    return arr;
  }
}