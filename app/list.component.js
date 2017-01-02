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
var picture_1 = require('./picture');
var ListComponent = (function () {
    function ListComponent() {
        this.swapLists = new core_1.EventEmitter();
    }
    ListComponent.prototype.changeLists = function (picture) {
        if (!picture.value) {
            return;
        }
        this.swapLists.emit(picture);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', picture_1.Picture)
    ], ListComponent.prototype, "pictures", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ListComponent.prototype, "swapLists", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            template: "\n    <div class=\"list\">\n      <h2>{{title}}</h2>\n      <div id=\"container\">\n        <div class=\"picture\" *ngFor=\"let picture of pictures\" (click)=\"changeLists(picture)\">\n          <img *ngIf=\"picture.value\" [src]=\"picture.value\" height=\"100%\" width=\"100%\">\n          <span class=\"count\" [ngClass]=\"{'maxCount': picture.count === 5}\">{{picture.count}}</span>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n      #container .picture{\n        height: 150px;\n        width: 200px;\n        overflow-x: auto;\n        cursor: pointer;\n        border: 1px solid;\n        border-top: none;\n        position: relative;\n      }\n    ", "\n      #container .picture:first-child{\n        border-top: 1px solid;\n      }\n    ", "\n      .count{\n        position: absolute;\n        padding: 5px;\n        bottom: 0px;\n        right: 0px;\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n      }\n    ", "\n      .maxCount{\n        color: red;\n      }\n    ", "\n    .list{\n      margin: 10px;\n      float: left;\n    }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map