import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log(this.model);
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')
    const name = input.value
    this.model.set({name})
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <h3>name: ${this.model.get('name')}</h3>
        <h3>age: ${this.model.get('age')}</h3>
        <input name='set-name' type="text"/>
        <button id='set-name'>Change Name</buttonid>
        <button id='set-age'>Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
        console.log('eventsMap[eventKey]', eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
