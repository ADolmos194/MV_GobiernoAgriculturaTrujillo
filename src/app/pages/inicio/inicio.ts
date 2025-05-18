import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: "./inicio.components.html",
    imports: [DividerModule, ButtonModule]
})
export class Inicio {
    constructor(private router: Router) { }

    irAOferta() {
        this.router.navigate(['/oferta']);
    }

    irADemanda() {
        this.router.navigate(['/demanda']);
    }

    irAEmpleos() {
        this.router.navigate(['/']);
    }

    irAServicios() {
        this.router.navigate(['/']);
    }
}
