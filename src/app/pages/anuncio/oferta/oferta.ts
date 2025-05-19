import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';


import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from './../../service/producto/producto.model';

@Component({
    selector: 'app-oferta',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        MenuModule,
        BadgeModule,
        RippleModule,
        DataView,
        Tag,
        SelectButton,
        FormsModule,],
    templateUrl: "./oferta.components.html",
    providers: [ProductService],
})
export class Oferta implements OnInit {
    items!: MenuItem[];


    products = signal<any>([]);
    layout: 'list' | 'grid' = 'grid';
    options: ('list' | 'grid')[] = ['list', 'grid'];


    constructor(private productService: ProductService) { }

    ngOnInit() {

        this.productService.getProducts().then((data) => {
            this.products.set([...data.slice(0, 12)]);
        });

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

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }
}
