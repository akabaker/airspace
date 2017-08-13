import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queued-monitor',
  templateUrl: './queued-monitor.component.html',
  styleUrls: ['./queued-monitor.component.css']
})
export class QueuedMonitorComponent implements OnInit {
  @Input() queuedCount: number

  constructor() { }

  ngOnInit() {
  }

}
