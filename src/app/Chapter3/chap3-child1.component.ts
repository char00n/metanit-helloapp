import { Component } from "@angular/core";

@Component({
    selector: 'chap3c1-comp',
    templateUrl: './chap3-child1.component.html',
    styleUrls: ['./chap3-child1.component.css']  
})

export class Chap3Child1Component{
    isVerdana = true;
    isSegoe = true;
    isNavy = true;

    currentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }
}