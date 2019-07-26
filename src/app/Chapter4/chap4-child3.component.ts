import { Component, OnInit } from "@angular/core";
import { Data3Service } from "./data3.service";
import { LogService } from "./log.service";

@Component({
    selector: 'chap4-child3-comp',
    templateUrl: './chap4-child3.component.html',
    providers: [Data3Service] // Добавлен только сервис DataService
})

export class Chap4Child3Component implements OnInit {
    items: string[] = [];

    constructor(private dataService: Data3Service) {}

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}