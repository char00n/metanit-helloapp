import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   name = 'Tom';
   age = 25;
   count: number = 0;
   increase($event): void {
      this.count++;
      console.log($event);
   }
}