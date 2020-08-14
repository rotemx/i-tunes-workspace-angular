import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[TheMarker]'
})
export class TheMarkerDirective {
  
  @Input('TheMarker') TheMarker ;
  
    constructor(public el: ElementRef) {
    }
  
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.TheMarker;
    // this.el.nativeElement.style.color = '#777';
  
  }
}
