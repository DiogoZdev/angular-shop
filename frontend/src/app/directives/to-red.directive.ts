import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToRed]'
})
export class ToRedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#ff0000';
   }

}
