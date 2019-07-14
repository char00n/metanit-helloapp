import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';
import { Child4Component } from './child4.component';
import { Child5Component } from './child5.component';
import { Child6Component } from './child6.component';

@NgModule({
   imports: [ BrowserModule, FormsModule ],
   declarations: [ AppComponent, ChildComponent, Child2Component,  
                   Child3Component, Child4Component, Child5Component,
                   Child6Component],
   bootstrap: [ AppComponent ]
})

export class AppModule {}