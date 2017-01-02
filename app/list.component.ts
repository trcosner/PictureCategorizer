import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Picture } from './picture';

@Component({
  selector: 'list',
  template: `
    <div class="list">
      <h2>{{title}}</h2>
      <div id="container">
        <div class="picture" *ngFor="let picture of pictures" (click)="changeLists(picture)">
          <img *ngIf="picture.value" [src]="picture.value" height="100%" width="100%">
          <span class="count" [ngClass]="{'maxCount': picture.count === 5}">{{picture.count}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
      #container .picture{
        height: 150px;
        width: 200px;
        overflow-x: auto;
        cursor: pointer;
        border: 1px solid;
        border-top: none;
        position: relative;
      }
    `,`
      #container .picture:first-child{
        border-top: 1px solid;
      }
    `,`
      .count{
        position: absolute;
        padding: 5px;
        bottom: 0px;
        right: 0px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
      }
    `,`
      .maxCount{
        color: red;
      }
    `,`
    .list{
      margin: 10px;
      float: left;
    }
      `
    ]
})

export class ListComponent {
  @Input() pictures: Picture;
  @Input() title: string;
  @Output() swapLists: EventEmitter<any> = new EventEmitter();
    changeLists(picture){
      if(!picture.value){
        return;
      }
      this.swapLists.emit(picture);
    }

}
