import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[bold2]'
})

export class Bold2Directive {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      //  this.elementRef.nativeElement.style.fontWeight = "bold";
      this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }

    @HostListener("mouseenter") onmouseenter() {
        this.setFontWeight("bold");
    }

    @HostListener("mouseleave") onmouseleave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val: string){
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
    }
}