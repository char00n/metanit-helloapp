import { Component, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Child5Component } from './child5.component';

@Component({
   selector: 'my-app',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
   name: string = 'Tom';
   age: number = 25;

   colspan = 2;

   count: number = 0;
   increase() : void {
      this.count++;
   }

   isRed = false;
   red = "isredbox";

   clicks: number = 0;
   onChanged(increased: any){
      increased == true ? this.clicks++ : this.clicks--;
   }

   constructor() {
      this.log('constructor');
   }

   ngOnChanges(changes: SimpleChanges){
      for(let propName in changes){
          let chng = changes[propName];
          let cur = JSON.stringify(chng.currentValue);
          let prev = JSON.stringify(chng.previousValue);
          this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
  }

   private log(msg: string){
      console.log(msg);
   }

   @ViewChild(Child5Component, { read: false })
   private counterComponent: Child5Component;

   increment() {this.counterComponent.increment();}
   decrement() { this.counterComponent.decrement(); }

   @ViewChild("nameText", {read: false})
   nameParagraph: ElementRef;

   change() {
      console.log(this.nameParagraph.nativeElement.textContent);
      this.nameParagraph.nativeElement.textContent = "hell";
   }
}