"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pictureList1 = [
    { id: 0, value: './images/1.jpg', count: 0 },
    { id: 1, value: './images/2.jpg', count: 0 },
    { id: 2, value: './images/3.jpg', count: 0 },
    { id: 3, value: './images/4.jpg', count: 0 },
    { id: 4, value: './images/5.jpg', count: 0 }
];
var pictureList2 = [];
var AppComponent = (function () {
    function AppComponent() {
        this.pictureList1 = pictureList1;
        this.pictureList2 = pictureList2;
    }
    AppComponent.prototype.setLists = function (picture) {
        var indexL1 = this.pictureList1.map(function (item) { return item.id; }).indexOf(picture.id);
        var indexL2 = this.pictureList2.map(function (item) { return item.id; }).indexOf(picture.id);
        var index = indexL1 === -1 ? indexL2 : indexL1;
        var fromArray = indexL1 === -1 ? this.pictureList2 : this.pictureList1;
        var toArray = indexL1 === -1 ? this.pictureList1 : this.pictureList2;
        if (fromArray[index].count === 5) {
            return;
        }
        fromArray[index].count++;
        toArray.push(fromArray[index]);
        fromArray.splice(index, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"container\">\n        <list [pictures]=\"pictureList1\" [title]=\"'List One'\" (swapLists)=\"setLists($event)\"></list>\n        <list [pictures]=\"pictureList2\" [title]=\"'List Two'\" (swapLists)=\"setLists($event)\"></list>\n      </div>\n  ",
            styles: ["\n      .container {\n        margin: 15px;\n      }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map