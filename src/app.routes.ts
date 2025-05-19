import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Inicio } from './app/pages/inicio/inicio';
import { Oferta } from './app/pages/anuncio/oferta/oferta';
import { Demanda } from './app/pages/anuncio/demanda/demanda';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Inicio },
        ]
    },
    {
        path: 'anuncio/oferta',
        component: AppLayout,
        children: [
            { path: '', component: Oferta },
        ]
    },
    {
        path: 'anuncio/demanda',
        component: AppLayout,
        children: [
            { path: '', component: Demanda },
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
