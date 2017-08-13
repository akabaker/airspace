import { Component, OnInit } from '@angular/core';
import { IDisclosureRequest } from '../../models/disclosurerequest.model';
import { DisclosurerequestsService } from '../disclosurerequests.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  disclosureRequests: IDisclosureRequest[];

  constructor(private disclosureRequestsService: DisclosurerequestsService) { }

  ngOnInit() {
    this.getDisclosureRequest();
  }

  getDisclosureRequest() {
    /*
    const timer = Observable.interval(2000)
                            .timeInterval();

    timer.subscribe((sub) =>
      this.disclosureRequestsService.mockGetInProcessRequests().subscribe(disclosureRequests => {
        this.disclosureRequests = disclosureRequests;
      })
    );
    */
    this.disclosureRequestsService.mockGetInProcessRequests().subscribe(disclosureRequests => {
      this.disclosureRequests = disclosureRequests;
    });
  }
}
