import { Component, Output } from '@angular/core';

import { Picture } from './picture';

let pictureList1: Picture[] = [
  {id: 0, value: './images/1.jpg', count: 0},
  {id: 1, value: './images/2.jpg', count: 0},
  {id: 2, value: './images/3.jpg', count: 0},
  {id: 3, value: './images/4.jpg', count: 0},
  {id: 4, value: './images/5.jpg', count: 0}
];

let pictureList2: Picture[] = [];

@Component({
  selector: 'my-app',
  template: `
      <div class="container">
        <list [pictures]="pictureList1" [title]="'List One'" (swapLists)="setLists($event)"></list>
        <list [pictures]="pictureList2" [title]="'List Two'" (swapLists)="setLists($event)"></list>
      </div>
  `,
  styles: [`
      .container {
        margin: 15px;
      }
    `
  ]
})

export class AppComponent {
  pictureList1 = pictureList1;
  pictureList2 = pictureList2;

  setLists(picture) {
    let indexL1 = this.pictureList1.map(function(item){return item.id;}).indexOf(picture.id);
    let indexL2 = this.pictureList2.map(function(item){return item.id;}).indexOf(picture.id);
    let index = indexL1 === -1 ? indexL2 : indexL1;
    let fromArray = indexL1 === -1 ? this.pictureList2 : this.pictureList1
    let toArray = indexL1 === -1 ? this.pictureList1 : this.pictureList2

    if(fromArray[index].count === 5){
      return;
    }

    fromArray[index].count++;
    toArray.push(fromArray[index]);
    fromArray.splice(index, 1);
  }
}
