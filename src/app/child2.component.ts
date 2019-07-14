import { Component, Input } from '@angular/core';

@Component({
    selector: 'child2-comp',
    templateUrl: 'child2.component.html',
    styles: [`h2, p {color:red;}`]
})

export class Child2Component {
    @Input() userName: string;
    _userAge: number;
 //   @Input() userAge: number;
    @Input()
    set userAge(age: number) {
        if(age<0)
            this._userAge = 0;
        else if(age > 100)
            this._userAge = 100;
        else
            this._userAge = age;
    }
    get userAge() { return this._userAge;}
    
}