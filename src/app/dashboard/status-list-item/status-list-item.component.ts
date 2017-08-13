import { Component, OnInit, Input } from '@angular/core';
import { IDisclosureRequest } from '../../models/disclosurerequest.model';

@Component({
  selector: 'app-status-list-item',
  templateUrl: './status-list-item.component.html',
  styleUrls: ['./status-list-item.component.css']
})
export class StatusListItemComponent implements OnInit {
  @Input() disclosureRequest: IDisclosureRequest;

  constructor() { }

  ngOnInit() {
  }

}
