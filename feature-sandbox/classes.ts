class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beeep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }


  private drive(): void {
    console.log('vroooom');
  }
  override(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car('red');
car.override();
const vehicle = new Vehicle('orange')
console.log(vehicle.color)
