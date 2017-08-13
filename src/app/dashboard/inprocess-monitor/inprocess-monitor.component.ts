import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inprocess-monitor',
  templateUrl: './inprocess-monitor.component.html',
  styleUrls: ['./inprocess-monitor.component.css']
})
export class InprocessMonitorComponent implements OnInit {
  @Input() inProcessCount: number;

  constructor() { }

  ngOnInit() {
  }

}
