class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `The boat's color is ${this.color}`;
  }

  @logError('oops boat was sunk!')
  pilot(): void {
    throw new Error();
    console.log('swiissshhhh');
  }
}

// decorator factory
function logError(errMsg: string){
return function (target:any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function() {
    try {
    method()
    } catch (e) {
    console.log(errMsg)
    }
  }
}
}

// logError(Boat.prototype, 'pilot', {writable: false});
new Boat().pilot()