import { Component, OnInit} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
@Component({
    selector: 'app-demanda',
    standalone: true,
    imports: [CardModule, ButtonModule, PanelMenu, MenuModule, BadgeModule, RippleModule, AvatarModule],
    templateUrl: "./demanda.components.html"
})
export class Demanda implements OnInit {
    items!: MenuItem[];
    ngOnInit() {
        this.items = [
            {
                label: 'Demanda',
                items: [
                    {
                        label: 'PRODUCTO AGROPECUARIOS',
                        icon: 'pi pi-chart-line',
                    },
                ]
            }
        ]
    }
}
