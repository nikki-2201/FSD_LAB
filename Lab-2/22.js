function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  function* combineSequences(arr) {
    const fibGen = fibonacci();
    let arrIndex = 0;
  
    while (arrIndex < arr.length || true) {
      if (arrIndex < arr.length) {
        yield arr[arrIndex++];
      }
      yield fibGen.next().value;
    }
  }
  
  const arr = [10, 20, 30, 40];
  const combinedGen = combineSequences(arr);
  
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 

  