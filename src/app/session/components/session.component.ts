import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';

@Component({
    selector: 'app-session',
    templateUrl: '../views/session.component.html',
    providers: [
        SessionService,
    ],
})

export class SessionComponent implements OnInit {

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
                console.log(this.sessions);
            }, (error) => {
                console.error(error);
            });
    }
}
