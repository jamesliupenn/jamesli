import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlighter]' })

export class HighlighterDirective {
	constructor(private el: ElementRef) {
	}

	@Input() defaultColor: string;

	@Input('myHighlighter') myColor: string; 

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.myColor || this.defaultColor || "red");
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.el.nativeElement.style.background = color;
	}

}