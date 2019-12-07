import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Chap5Component } from "./chap5.component";
import { Chap5Child1Component } from "./chap5-child1.component";
import { Chap5Child2Component } from "./chap5-child2.component";
import { Chap5Child3Component } from "./chap5-child3.component";

@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [ Chap5Component, Chap5Child1Component, Chap5Child2Component,
    Chap5Child3Component],
    exports: [Chap5Component]
})

export class Chap5Module {

}