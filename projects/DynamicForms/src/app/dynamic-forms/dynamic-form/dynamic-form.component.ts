import {Component, Input, OnInit} from '@angular/core';
import {DynamicForm}              from '../../types/interfaces/dynamic-form';
import {FormGroup}                from '@angular/forms';

@Component({
  selector: 'dyn-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() form:DynamicForm
  
  formGroup:FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
