import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-demanda',
    standalone: true,
    imports: [CardModule, ButtonModule],
    templateUrl: "./demanda.components.html"
})
export class Demanda {}
