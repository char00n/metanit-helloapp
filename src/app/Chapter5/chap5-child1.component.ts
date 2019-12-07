import { Component } from "@angular/core";

export class Phone {
    constructor(public title: string,
                public price: number,
                public company: string)
                {}
}


@Component({
    selector: 'chap5-child1-comp',
    templateUrl: './chap5-child1.component.html'
})

export class Chap5Child1Component{

    phone: Phone = new Phone("", 0, "Huawei");
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    addPhone() {
        this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    }
}