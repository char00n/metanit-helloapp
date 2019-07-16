import { Component } from "@angular/core";

@Component({
    selector: 'chap3-comp',
    templateUrl: './chap3.component.html',
    styleUrls: ['./chap3.component.css']
})

export class Chap3Component{
    isVerdana = true;
    isSegoe = true;
    isNavy = true;

    curentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }
}