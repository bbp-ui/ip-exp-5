const numbers = [1, 2, 3, 4, 5,100];

const squareIterator = {
    arr: numbers,
    currentIndex: 0,
    next() {
        if (this.currentIndex < this.arr.length) {
            const result = { value: this.arr[this.currentIndex] ** 2, done: false };
            this.currentIndex++;
            return result;
        } else {
            return { value: undefined, done: true };
        }
    }
};

// Example usage:
while (!result.done) {
    console.log(result.value);
    result = squareIterator.next();
}
