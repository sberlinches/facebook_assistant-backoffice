import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionRecordsComponent } from './components/session-records.component';
import { SessionChartsComponent } from './components/session-charts.component';

const routes: Routes = [
    {
        path: 'sessions/records',
        component: SessionRecordsComponent,
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
