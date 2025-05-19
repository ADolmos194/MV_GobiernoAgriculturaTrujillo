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
    selector: 'app-oferta',
    standalone: true,
    imports: [CardModule, ButtonModule, PanelMenu, MenuModule, BadgeModule, RippleModule, AvatarModule],
    templateUrl: "./oferta.components.html"
})
export class Oferta implements OnInit {
    items!: MenuItem[];
    ngOnInit() {
        this.items = [
            {
                label: 'OFERTAS',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'SERVCIO AGRARIO',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'PRODUCTOS LACTEOS',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'FRUTAS',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'INSUMO TECNOLOGICO',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'CEREALES LEGUMBRES',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'TUBERCULOSIS RAICES',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'PASTOS FORRAJES',
                        icon: 'pi pi-tablet'
                    }

                ]
            }
        ]
    }
}
