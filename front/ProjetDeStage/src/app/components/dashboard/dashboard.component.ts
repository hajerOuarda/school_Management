import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
// Progressbar.js
import ProgressBar from 'progressbar.js';
import {CalendarOptions, DateSelectArg, EventApi, EventClickArg, FullCalendarModule} from "@fullcalendar/angular";
import {INITIAL_EVENTS, createEventId} from './event-utils';
import interactionPlugin, {Draggable} from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid"; // include this line

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin
])
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  /**
   * NgbDatepicker
   */
  currentDate?: NgbDateStruct;

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];
  @ViewChild('externalEvents', {static: true}) externalEvents?: ElementRef;

  constructor(private readonly calendar: NgbCalendar) {
  }

  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();

    /**
     * Progressbar1 initialization
     */
    const progressbar1 = new ProgressBar.Circle('#progressbar1', {
      color: '#727cf5',
      trailColor: 'rgba(77, 138, 240, .1)',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      // @ts-ignore
      from: {color: '#727cf5', width: 1},
      // @ts-ignore
      to: {color: '#727cf5', width: 4},
      // Set default step function for all animate calls
      step: (state: any, circle: any) => {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        const value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }

      }
    });
    if (progressbar1.text) {
      progressbar1.text.style.fontFamily = "'Overpass', sans-serif;";
      progressbar1.text.style.fontSize = '3rem';
      progressbar1.animate(.78);
    }
  }

  ngAfterViewInit(): void {
    // For external-events dragging
    new Draggable(this.externalEvents?.nativeElement, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: eventEl.getAttribute('bgColor'),
          borderColor: eventEl.getAttribute('bdColor')
        };
      }
    });

  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
