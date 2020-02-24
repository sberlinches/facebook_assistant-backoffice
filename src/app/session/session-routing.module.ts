import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './components/session.component';
import { SessionChartsComponent } from './components/session-charts.component';

const routes: Routes = [
    {
        path: 'sessions',
        component: SessionComponent,
    },
    {
        path: 'sessions/charts',
        component: SessionChartsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SessionRoutingModule { }
