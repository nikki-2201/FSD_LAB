function* cumulativeSum(arr) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
      yield sum;
    }
    return sum;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const gen = cumulativeSum(arr);
  
  let result = gen.next();
  while (!result.done) {
    console.log(result.value);
    result = gen.next();
  }
  
  console.log('Final Sum:', result.value);
  