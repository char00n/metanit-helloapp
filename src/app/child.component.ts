import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styles: [`h2, p {color:red;}`]
})

export class ChildComponent {
    name = "Евгений";
}