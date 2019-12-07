import { Component } from "@angular/core";

export class User {
    name: string;
    email: string;
    phone: string;
}


@Component({
    selector: 'chap5-child3-comp',
    templateUrl: './chap5-child3.component.html',
    styleUrls: ['./chap5-child3.component.css']
})

export class Chap5Child3Component{

    user: User = new User();
    addUser(){
        console.log(this.user);
    }
}