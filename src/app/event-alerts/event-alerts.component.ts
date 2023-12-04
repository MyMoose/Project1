import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../events';

@Component({
  selector: 'app-event-alerts',
  templateUrl: './event-alerts.component.html',
  styleUrl: './event-alerts.component.css'
})
export class EventAlertsComponent {

  @Input() event: Event | undefined;
  @Output() notify = new EventEmitter();
}
