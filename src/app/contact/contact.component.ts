import { Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
@ViewChildren('label') labelAll!:QueryList<ElementRef>
 

// const element = this.itemElements.toArray()[index];

showLabel(index:number) {
  const element = this.labelAll.toArray()[index];
    element.nativeElement.classList.add('position-relative');
}
// this.label1.nativeElement.classList.add('position-relative' ,'top-0')
  }
  

