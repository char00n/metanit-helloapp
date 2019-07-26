import { Component, OnInit } from "@angular/core";
import { Data2Service } from "./data2.service";
import { LogService } from "./log.service";

@Component({
    selector: 'chap4-data-comp',
    templateUrl: './chap4-data.component.html'
})

export class Chap4DataComponent implements OnInit {
    items: string[] = [];

    constructor(private dataService: Data2Service) {}

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}