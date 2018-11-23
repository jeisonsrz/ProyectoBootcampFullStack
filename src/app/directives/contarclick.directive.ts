import { Directive, HostListener, HostBinding } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: 'li[contar_click]' })

export class AppContarClickDirective {
    clickN = 0;
    // HostBinding recive como para metro (que tributo de html queremos editar)
    // tslint:disable-next-line:no-inferrable-types
    @HostBinding('style.opacity') opacity: number = .1;
    // Hostlinetener recibe 3 parametros (evetno html, caputrar el evento, funcion a usar )
    @HostListener('click', ['$event.target']) onClick(btn) {
        console.log('a', btn, 'numero de click:', this.clickN++);
        this.opacity += .1;
    }
}
