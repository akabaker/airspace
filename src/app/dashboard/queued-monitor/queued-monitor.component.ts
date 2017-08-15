import { Component, OnInit, Input } from '@angular/core';
import { DisclosurerequestsService } from '../disclosurerequests.service';

@Component({
  selector: 'app-queued-monitor',
  templateUrl: './queued-monitor.component.html',
  styleUrls: ['./queued-monitor.component.css']
})
export class QueuedMonitorComponent implements OnInit {
  queuedCount: number

  constructor(private disclosurerequestsService: DisclosurerequestsService) { }

  ngOnInit() {
    this.getQueuedRequests();
  }

  getQueuedRequests() {
    this.disclosurerequestsService.getQueuedRequests().subscribe(disclosureRequests => {
      this.queuedCount = disclosureRequests.length;
    });
  }

}
