import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../app.configurator';
import { LayoutService } from '../../service/layout.service';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TabsModule } from 'primeng/tabs';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DividerModule } from 'primeng/divider';
import { Menu } from 'primeng/menu';


@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, DividerModule,
        BreadcrumbModule,
        TieredMenuModule,
        IconFieldModule,
        InputIconModule,
        MenuModule,
        ButtonModule,
        ContextMenuModule,
        MegaMenuModule,
        PanelMenuModule,
        TabsModule,
        MenubarModule,
        InputTextModule,
        TabsModule,
        StepperModule,
        TabsModule,
        Menu
    ],
    templateUrl: "./topbar.components.html"
})
export class AppTopbar implements OnInit {


    constructor(public layoutService: LayoutService) {
        this.EscritorioMenuItems();
        this.MovilMenuItems()
    }

    toggleDarkMode() {
        const newDark = !this.layoutService.layoutConfig().darkTheme;
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: newDark }));
        this.EscritorioMenuItems();
        this.MovilMenuItems()
    }

    isMobileView: boolean = false;

    mainMenuItems: MenuItem[] = [];
    userMenuItems: MenuItem[] = [];
    combinedMenuItems: MenuItem[] = [];

    ngOnInit(): void {
        this.detectViewport();
        window.addEventListener('resize', () => this.detectViewport());
        this.EscritorioMenuItems();
        this.MovilMenuItems();
    }


    detectViewport() {
        this.isMobileView = window.innerWidth <= 768;
        this.EscritorioMenuItems();
        this.MovilMenuItems()
    }

    EscritorioMenuItems() {
        this.mainMenuItems = [
            { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
            {
                label: 'Anuncios', icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Oferta', icon: 'pi pi-fw pi-id-card', routerLink: ['/anuncio/oferta'] },
                    { label: 'Demanda', icon: 'pi pi-fw pi-cog', routerLink: ['/anuncio/demanda']  },
                ]
            },
            { label: 'Empleos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/'] },
            { label: 'Servicios', icon: 'pi pi-fw pi-cog', routerLink: ['/'] },
        ];

        this.userMenuItems = [
            {
                label: this.layoutService.isDarkTheme() ? 'Modo claro' : 'Modo oscuro',
                icon: this.layoutService.isDarkTheme() ? 'pi pi-sun' : 'pi pi-moon',
                command: () => this.toggleDarkMode()
            },
            {
                label: 'Nombre de Usuario'
            },
            {
                label: 'Cuenta', icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-id-card' },
                    { label: 'Ajustes', icon: 'pi pi-fw pi-cog' },
                    { label: 'Cerrar sesión', icon: 'pi pi-fw pi-sign-out' }
                ]
            },
        ];
    }

    MenuMovil: MenuItem[] = [];

    MovilMenuItems() {
        this.MenuMovil = [
            {
                label: 'Principal', icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Oferta', icon: 'pi pi-fw pi-upload', routerLink: ['/oferta'] },
                    { label: 'Demanda', icon: 'pi pi-fw pi-download', routerLink: ['/demanda'] },
                    { label: 'Empleos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/'] },
                    { label: 'Servicios', icon: 'pi pi-fw pi-cog', routerLink: ['/'] },
                ]
            },
            {
                label: 'Cuenta', icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Nombre de Usuario', icon: 'pi pi-fw pi-id-card' },
                    { label: 'Perfil', icon: 'pi pi-fw pi-id-card' },
                    { label: 'Ajustes', icon: 'pi pi-fw pi-cog' },
                    {
                        label: this.layoutService.isDarkTheme() ? 'Modo claro' : 'Modo oscuro',
                        icon: this.layoutService.isDarkTheme() ? 'pi pi-sun' : 'pi pi-moon',
                        command: () => this.toggleDarkMode()
                    },
                    { label: 'Cerrar sesión', icon: 'pi pi-fw pi-sign-out' }
                ]
            }
        ];
    }
}
