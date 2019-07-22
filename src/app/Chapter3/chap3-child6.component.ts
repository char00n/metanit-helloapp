import { Component } from "@angular/core";

@Component({
    selector: 'chap3-child6-comp',
    templateUrl: './chap3-child6.component.html' 
})

export class Chap3Child6Component {

    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }
}