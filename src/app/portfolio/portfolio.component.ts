import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  [x: string]: any;
  @ViewChild('light') lightBox!: ElementRef;
  @ViewChildren('img') imgs!: QueryList<ElementRef>;
  @ViewChild('img1') img1!: ElementRef;
  @ViewChild('lightBoxC') lightBoxCo!:ElementRef
constructor(private renderer:Renderer2){}
  show(e: any): void {
    let mySrc: String = e.target.getAttribute('src');
    this.lightBoxCo.nativeElement.style.backgroundImage=`url(${mySrc})`

   
    this.lightBox.nativeElement.classList.replace('d-none', 'd-flex');
  }
  dis(e:any): void {
    if(e.target.id=='lightBoxContainer')
    this.lightBox.nativeElement.classList.replace('d-flex', 'd-none');
  }
  
  onLayerClick(event: MouseEvent): void {
    const imageElement = (event.target as HTMLElement).parentElement?.querySelector('img');
    if (imageElement) {
      imageElement.click();
    }
  }
  
}
