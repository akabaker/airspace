import { Component, OnInit } from '@angular/core';
import { IDisclosureRequest } from '../models/disclosurerequest.model';
import { DisclosurerequestsService } from '../disclosurerequests.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  disclosureRequest: IDisclosureRequest;

  constructor(private disclosureRequestsService: DisclosurerequestsService) { }

  ngOnInit() {
    this.getDisclosureRequest();
  }

  getDisclosureRequest() {
    this.disclosureRequestsService.getDisclosureRequest().subscribe(x => {
      this.disclosureRequest = x;
    });
  }
}
