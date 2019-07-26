import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Chap4Component } from "./chap4.component";
import { Chap4Child1Component } from "./chap4-child1.component";
import { Chap4Child2Component } from "./chap4-child2.component";
import { Chap4Child3Component } from "./chap4-child3.component";
import { Chap4Child4Component } from "./chap4-child4.component";
import { Chap4DataComponent } from "./chap4-data.component";
import { Data2Service } from "./data2.service";
import { LogService } from "./log.service";

@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [ Chap4Component, Chap4Child1Component, Chap4Child2Component, Chap4Child3Component,
            Chap4Child4Component, Chap4DataComponent],
    exports: [Chap4Component],
    providers: [Data2Service, LogService]
})

export class Chap4Module {

}