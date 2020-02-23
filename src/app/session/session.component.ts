import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionService } from './session.service';
import { Session } from './session';

@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.scss'],
    providers: [
        SessionService,
    ],
})

export class SessionComponent implements OnInit {

    // TODO private?
    public sessions: Array<Session>;

    constructor(
        private sessionService: SessionService,
    ) {}

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
