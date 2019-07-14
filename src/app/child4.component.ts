import { Component, Input, OnInit, OnChanges, SimpleChanges,
        DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewChecked, AfterViewInit  } from '@angular/core';

@Component({
    selector: 'child4-comp',
    template: `<p>Привет {{name}}</p>`
})

export class Child4Component implements OnInit, 
                                        DoCheck,
                                        OnChanges,
                                        AfterContentInit,
                                        AfterContentChecked,
                                        AfterViewChecked,
                                        AfterViewInit {
    @Input() name: string;
    count: number = 1;

    constructor() { this.log('constructor4');}

    ngOnInit() { this.log('onInit4'); }

    ngOnChanges(changes: SimpleChanges){
        for(let propName in changes){
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    ngDoCheck(){
        this.log('onDoCheck4');
    }

    ngAfterViewInit(){
        this.log('AfterViewInit4');
    }

    ngAfterViewChecked(){
        this.log('AfterViewChecked4');
    }

    ngAfterContentInit() {
        this.log('AfterContentInit4');
    }

    ngAfterContentChecked() {
        this.log('AfterContentChecked4');
    }

    private log(msg: string){
        console.log(this.count + ". " + msg);
        this.count++;
    }
}