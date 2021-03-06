import { Injectable } from "@angular/core"
import { LogService } from "./log.service";

@Injectable()
export class Data2Service {
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];

    constructor(private logService: LogService) {}

    getData(): string[] {

        this.logService.write("операция получения данных");
        return this.data;
    }

    addData(name: string) {
        this.logService.write("операция добавления данных")
        this.data.push(name);
    }
}