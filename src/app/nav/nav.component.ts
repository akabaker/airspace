import { Component, OnInit, Inject } from '@angular/core';
import { JQ_TOKEN } from 'app/common/jQuery.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    this.initializeSideNav();
  }

  initializeSideNav() {
      this.$('.button-collapse').sideNav();
  }
}
