import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
@Directive({ selector: '[appResaltar]' })
export class AppResaltarDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // tslint:disable-next-line:no-input-rename
  @Input('appResaltar') plan: string;
  ngOnInit() {
    if (this.plan === 'pagado') {
      // setStyle(elementonativo, atributtocss, valor para eseatributo)
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
