import { Component, OnInit } from "@angular/core";
import { Data2Service } from "./data2.service";
import { LogService } from "./log.service";

@Component({
    selector: 'chap4-child2-comp',
    templateUrl: './chap4-child2.component.html',
    providers: [Data2Service, LogService]
})

export class Chap4Child2Component implements OnInit {
    items: string[] = [];

    constructor(private dataService: Data2Service) {}

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}