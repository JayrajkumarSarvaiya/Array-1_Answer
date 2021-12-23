function biggerTwo(a, b){
  let first = a[0]+a[1];
  let second = b[0]+b[1];
  if(first < second)
    return b;
  else 
    return a;
}