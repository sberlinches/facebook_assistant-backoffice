import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';

@Component({
    selector: 'app-session',
    templateUrl: '../views/session-records.component.html',
    providers: [
        SessionService,
    ],
})

export class SessionRecordsComponent implements OnInit {

    public sessions: Array<Session>;
    public title: string;

    constructor(
        private sessionService: SessionService,
    ) {
        this.title = 'Records';
    }

    ngOnInit(): void {
        this.getSessions();
    }

    private getSessions(): void {
        this.sessionService
            .getAll()
            .subscribe((sessions) => {
                this.sessions = sessions as Session[];
            }, (error) => {
                console.error(error);
            });
    }
}
