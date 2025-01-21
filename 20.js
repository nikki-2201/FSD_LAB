class IterableWithReset {
    constructor(arr) {
      this.arr = arr;
      this.index = 0;
    }
  
    [Symbol.iterator]() {
      const arr = this.arr;
      let index = this.index;
      return {
        next() {
          if (index < arr.length) {
            return { value: arr[index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  
    reset() {
      this.index = 0;
    }
  }
  
  const numbers = new IterableWithReset([1, 2, 3, 4]);
  
  for (const num of numbers) {
    console.log(num);
  }
  
  numbers.reset();
  
  for (const num of numbers) {
    console.log(num);
  }
  