@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `The boat's color is ${this.color}`;
  }

  @logError('oops boat was sunk!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swiissshhhh');
    } else {
      console.log('nothinn');
    }
  }
}

function parameterDecorator(targetClass: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

// decorator factory
function logError(errMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errMsg);
      }
    };
  };
}

// logError(Boat.prototype, 'pilot', {writable: false});
// new Boat().pilot()
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

console.log(todo);
