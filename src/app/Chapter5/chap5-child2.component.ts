import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";

export class Phone {
    constructor(public title: string,
                public price: number,
                public company: string)
                {}
}


@Component({
    selector: 'chap5-child2-comp',
    templateUrl: './chap5-child2.component.html'
})

export class Chap5Child2Component{

    phone: Phone = new Phone("", 0, "Huawei");
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    addPhone(title: NgModel, price: NgModel, comp: NgModel) {
        console.log(title);
        console.log(price);
        console.log(comp);
        //this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    }

    onTitleChange() {
        if(this.phone.title == "нет")
            this.phone.title = "неизвестно";
    }
}