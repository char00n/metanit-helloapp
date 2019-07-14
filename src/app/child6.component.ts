import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'child6-comp',
    template: `<ng-content></ng-content>
            <button (click)="change()">Изменить</button>`
})

export class Child6Component {

    @ContentChild("headerContent", {read: false})
    header: ElementRef;

    change(){
        console.log(this.header);
        this.header.nativeElement.textContent = "Hell to world!";
    }
}