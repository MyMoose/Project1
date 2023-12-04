import { Component } from '@angular/core';
import { Event, events } from '../../events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  public events = [...events];

  public showDetail(eventClicked: Event): void {
    window.alert(eventClicked.description);
  }

  public onNotify(): void {
    window.alert('You will be notified when the event goes on sale');
  }
}
