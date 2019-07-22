import { Directive, HostListener, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[bold5]'
})

export class Bold5Directive implements OnInit {

    @Input("bold5") selectedSize = "18px";
    @Input() defaultSize = "16px";
    
    private fontSize: string;
    private fontWeight = "normal";

    ngOnInit(){
        this.fontSize = this.defaultSize;
    }

    @HostBinding("style.fontSize") get getFontSize() {
        return this.fontSize;
    } 

    @HostBinding("style.fontWeight") get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    @HostListener("mouseenter") onmouseenter() {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onmouseleave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}