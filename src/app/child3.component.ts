import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    selector: 'child3-comp',
    templateUrl: 'child3.component.html',
    styles: [`h2, p {color:red;}`]  
})

export class Child3Component {
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased: any) {
        console.log(increased);
        this.onChanged.emit(increased);
    }

    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }

}