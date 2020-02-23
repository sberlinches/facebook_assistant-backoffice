import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from './session';

const url = 'https://fem9u8nev9.execute-api.us-east-1.amazonaws.com/prod/sessions';

@Injectable({
    providedIn: 'root',
})

export class SessionService {

    constructor(
        private http: HttpClient,
    ) {}

    /**
     * Gets all sessions.
     * @return {Observable<Array<Session>>}
     */
    getAll(): Observable<Array<Session>> {
        return this.http
            .get<Session[]>(url);
    }

    /**
     * Gets a session.
     * @param {string} id — The session ID
     * @returns {Observable<Session>}
     */
    getOne(id: string): Observable<Session> {
      // const params = new HttpParams().set('id', id);
      return this.http
          .get<Session>(url + id); // TODO: Angular 6 has this parameters thing messed. Old school style
    }
}
