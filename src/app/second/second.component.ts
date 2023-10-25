import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() backColor = 'blue';
  @Output() msgToParent = new EventEmitter();

  clickHandler() {
    this.msgToParent.emit('Message envoyé de la part de Second Component !');
  }
}
