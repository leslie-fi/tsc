class Sorter {
  // collection: number[];
// need typeguards with union - typeof for number string boolean & instanceof for something w constructor fn eg array object
  constructor(public collection: number[] | string) {
    // this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        // if collection is  a string 
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
