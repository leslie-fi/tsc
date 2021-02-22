import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    } else {
      throw new Error('Could not find input element on this.parent');
    }
  };

  template(): string {
    return `
      <div class='user-form'>
        <input placeholder="${this.model.get(
          'name'
        )}" name='set-name' type="text"/>
        <button id='set-name'>Change Name</buttonid>
        <button id='set-age'>Set Random Age</button>
        <button id="save-model">Save</button>                   
      </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
