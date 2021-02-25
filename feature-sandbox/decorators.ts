class Boat {
  color: string = 'red';
  
  get formattedColor(): string {
    return `The boat's color is ${this.color}`
  }

  @testDecorator
  pilot(): void {
    console.log('swiissshhhh')
  }
}

function testDecorator(target:any, key: string): void {
  console.log('Target:',target)
  console.log('Key:',key)
}

testDecorator(Boat.prototype, 'pilot');