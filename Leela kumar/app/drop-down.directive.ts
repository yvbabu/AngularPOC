import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  isOpen = false;

  @HostBinding('class.open') 
  
  get opened() {
  
  return this.isOpen
  
  }
  
  @HostListener('mouseover') 
  
  open() {
  
  this.isOpen = true;
  
  }
  
  @HostListener('mouseleave')
  
  close() {
  
  this.isOpen = false
  
  }
  constructor() { }

}

