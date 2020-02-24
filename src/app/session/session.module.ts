import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SessionRoutingModule } from './session-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './components/session.component';
import { SessionService } from './session.service';

@NgModule({
    declarations: [
        SessionComponent,
    ],
    imports: [
        BrowserModule,
        SessionRoutingModule,
        HttpClientModule,
    ],
    exports: [],
    providers: [
        SessionService,
    ],
})

export class SessionModule {}
