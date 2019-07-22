import { Component } from "@angular/core";

@Component({
    selector: 'chap3-child4-comp',
    template: `<div> 
                     <p bold5="28px" selectedSize="28px" [defaultSize]="'14px'"> Hello Angular 2</p>
                     <p>Angular 2 представляет модульную архитектуру приложения</p>
                  </div>` 
})

export class Chap3Child4Component {}