class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index:number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}


const generic = new ArrayOfAnything<string>([...'apple'])
console.log(generic)

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
  }
}

printAnything([0,1,3,4])

// Generic Constraints

class Vroomer {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      element.print()
    }
}

printHousesOrCars<House>([new House(), new House()])
printHousesOrCars<Vroomer>([new Vroomer(), new Vroomer()])