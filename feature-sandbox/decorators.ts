class Boat {
  color: string = 'red';
  
  get formattedColor(): string {
    return `The boat's color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error()
    console.log('swiissshhhh')
  }
}

function logError(target:any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function() {
    try {
    method()
    } catch (e) {
    console.log('oops boat was sunk!')
    }
  }
}

// logError(Boat.prototype, 'pilot', {writable: false});
new Boat().pilot()