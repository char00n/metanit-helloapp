import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Chap3Component } from './chap3.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ Chap3Component],
    exports: [ Chap3Component]
})

export class Chap3Module {}