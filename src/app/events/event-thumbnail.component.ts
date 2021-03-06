import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventService } from './shared';


@Component({
    selector      : 'event-thumbnail',
    template    : `
        <div class="well hoverwell thumbnail">
            <h2>{{ event.name }}</h2>
            <div>Date:  {{ event.date }} </div>
            <div>Time:  {{ event.time }}</div>
            <div>Price: \${{ event.price }}</div>
            <div>
                <span>Location: {{ event.location.address }}</span>
                <span>&nbsp;</span>
                <span>{{ event.location.city }}, {{ event.location.country }}</span>
            </div>
        </div>
    `
})
export class EventThumbnailComponent {

    @Input() event:any

    someProperty:any    = 'some shizz';

    constructor( private events: EventService ) {}

    logFoo() { console.log( 'FOO' ) }

}