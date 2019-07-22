import { Component } from "@angular/core";

@Component({
    selector: 'chap3-child5-comp',
    templateUrl: './chap3-child5.component.html' 
})

export class Chap3Child5Component {

    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }

    items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];

    count: number = 1;
}