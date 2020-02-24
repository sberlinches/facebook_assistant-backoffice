import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-session',
    templateUrl: '../views/session-charts.component.html',
    providers: [
        SessionService,
    ],
})

export class SessionChartsComponent implements OnInit {

    public title: string;

    constructor() {
        this.title = 'Charts';
    }

    ngOnInit(): void {}
}
