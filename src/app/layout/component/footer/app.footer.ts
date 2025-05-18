import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-footer',

    templateUrl: './footer.components.html',
})
export class AppFooter {
    constructor(public router: Router) { }
}
