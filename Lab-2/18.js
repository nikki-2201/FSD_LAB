class ReverseIterable {
    constructor(arr) {
      this.arr = arr;
    }
  
    [Symbol.iterator]() {
      let index = this.arr.length - 1; 
      const arr = this.arr;
  
      return {
        next() {
          if (index >= 0) {
            return { value: arr[index--], done: false };  
          } else {
            return { value: undefined, done: true };  
          }
        }
      };
    }
  }
  
 
  const arr = [1, 2, 3, 4];
  const reverseIterable = new ReverseIterable(arr);
  
  for (const item of reverseIterable) {
    console.log(item);
  }
  