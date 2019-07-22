import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[bold3]'
})

export class Bold3Directive {

    private fontWeight = "normal";

    @HostBinding("style.fontWeight") get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    @HostListener("mouseenter") onmouseenter() {
        this.fontWeight = "bold";
    }

    @HostListener("mouseleave") onmouseleave() {
        this.fontWeight = "normal";
    }
}