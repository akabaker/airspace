import { Component, OnInit, Inject } from '@angular/core';
import { JQ_TOKEN } from 'app/common/jQuery.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: String;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    this.initializeSideNav();
    this.title = 'Airspace';
  }

  initializeSideNav() {
      this.$('.button-collapse').sideNav();
  }
}
