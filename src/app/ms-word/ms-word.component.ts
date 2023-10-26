import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  txtBg;
  txtCl;
  txtSize;
  txtFont;

  changeSize(newSize) {
    console.log(newSize);
    let unite = prompt("Saisissez l'unité");
    this.txtSize = newSize + unite;
  }
}
