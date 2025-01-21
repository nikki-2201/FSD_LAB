class InfiniteIterator {
    constructor(limit) {
      this.limit = limit;
      this.current = 1;
      this.steps = 0;
    }
  
    [Symbol.iterator]() {
      const that = this;
      return {
        next() {
          if (that.steps < that.limit) {
            that.steps++;
            return { value: that.current++, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  }
  
  const limit = 5;
  const infiniteSeq = new InfiniteIterator(limit);
  
  for (const num of infiniteSeq) {
    console.log(num);
  }
  