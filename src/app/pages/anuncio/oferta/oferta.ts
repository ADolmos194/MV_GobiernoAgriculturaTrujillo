import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-oferta',
    standalone: true,
    imports: [CardModule, ButtonModule],
    templateUrl: "./oferta.components.html"
})
export class Oferta {}
