import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector   : 'ita-circle',
    templateUrl: './circle.component.html',
    styleUrls  : ['./circle.component.css']
})
export class CircleComponent implements OnInit {
    alert   = alert;
    console = console;
    
    private _color;
    
    @Input() set color(value) {
        this._color  = value;
        this.is_blue = value === 'blue';
        this.is_green = value === 'green';
    };
    
    get color(){
        return this._color
    }
    
    @HostBinding('class.is_blue') is_blue;
    
    @HostBinding('attr.is_green') is_green;
    
    /*@HostListener('click') onClick(param) {*/
    /*    console.log(param, 'param');*/
    /*    alert('HOST KLIK !');*/
    /*}*/
    
    constructor() {
        window['CircleComponent'] = this;
        
    }
    
    ngOnInit(): void {
    }
    
}
