import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Chap3Component } from './chap3.component';
import { Chap3Child1Component } from './chap3-child1.component';
import { Chap3Child2Component } from './chap3-child2.component';
import { BoldDirective } from './bold.directive';
import { Bold2Directive } from './bold2.directive';
import { Chap3Child3Component } from './chap3-child3.component';
import { Bold3Directive } from './bold3.directive';
import { Bold4Directive } from './bold4.directive';
import { Chap3Child4Component } from './chap3-child4.component';
import { Bold5Directive } from './bold5.directive';
import { Chap3Child5Component } from './chap3-child5.component';
import { Chap3Child6Component } from './chap3-child6.component';
import { WhileDirective } from './while.directive';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ Chap3Component, Chap3Child1Component, 
        Chap3Child2Component, BoldDirective, Bold2Directive, Bold3Directive, Bold4Directive,
        Chap3Child3Component, Chap3Child4Component, Bold5Directive, Chap3Child5Component,
    Chap3Child6Component, WhileDirective ],
    exports: [ Chap3Component]
})

export class Chap3Module {}