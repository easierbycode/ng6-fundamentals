import { Component } from '@angular/core';
import { EventService } from './shared/event.service';


@Component({
    selector    : 'events-list',
    templateUrl : './events-list.component.html'
})
export class EventsListComponent {

    event1;
    
    constructor( private events: EventService ) {
        this.event1     = events.getEvent( 1 );
    }

    handleEventClicked( event ) {
        console.log( '[handleEventClicked]:  event1:' )
        console.log( event );
        this.event1 = event;
    }

}