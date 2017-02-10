import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {FormsModule, FormBuilder} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from '@angular/material';
import  {Events} from "./adverse_events/components/events";
import {EventsService} from './adverse_events/services/events';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        Events
    ],
    providers: [
        EventsService
    ],
    bootstrap: [
        Events,
    ],
})
export class AppModule {
}
