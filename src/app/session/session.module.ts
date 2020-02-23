import { NgModule } from '@angular/core';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './components/session.component';

@NgModule({
    declarations: [
        SessionComponent,
    ],
    imports: [
        SessionRoutingModule,
    ],
    exports: [],
    providers: [],
})

export class SessionModule {}
