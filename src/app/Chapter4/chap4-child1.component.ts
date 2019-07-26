import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
    selector: 'chap4-child1-comp',
    templateUrl: './chap4-child1.component.html',
    providers: [DataService]
})

export class Chap4Child1Component implements OnInit {
    items: string[] = [];

    constructor(private dataService: DataService) {}

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}